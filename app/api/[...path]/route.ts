import { NextRequest, NextResponse } from 'next/server'

const TMDB_API_KEY = process.env.TMDB_API_KEY ?? '279f8517761964c261b646f807bc633a'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params
  const endpoint = path[0] === 'tmdb' ? path.slice(1).join('/') : path.join('/')
  const params = new URLSearchParams(request.nextUrl.searchParams)
  params.delete('mediaType')
  params.delete('timeWindow')
  params.delete('watchRegion')
  params.delete('originalLanguage')
  params.delete('releaseDateLte')
  params.delete('sortBy')
  params.delete('page')

  let tmdbPath = endpoint
  if (endpoint === 'trending') {
    tmdbPath = `trending/${request.nextUrl.searchParams.get('mediaType') || 'all'}/${request.nextUrl.searchParams.get('timeWindow') || 'week'}`
  } else if (endpoint === 'discover') {
    const mediaType = request.nextUrl.searchParams.get('mediaType') || 'movie'
    tmdbPath = `discover/${mediaType}`
    const originalLanguage = request.nextUrl.searchParams.get('originalLanguage')
    const releaseDateLte = request.nextUrl.searchParams.get('releaseDateLte')
    const sortBy = request.nextUrl.searchParams.get('sortBy')
    const page = request.nextUrl.searchParams.get('page')
    if (originalLanguage) params.set('with_original_language', originalLanguage)
    if (releaseDateLte) params.set(mediaType === 'tv' ? 'first_air_date.lte' : 'release_date.lte', releaseDateLte)
    if (sortBy) params.set('sort_by', sortBy)
    if (page) params.set('page', page)
  } else if (endpoint === 'providers') {
    const mediaType = request.nextUrl.searchParams.get('mediaType') || 'movie'
    tmdbPath = `watch/providers/${mediaType}`
    const watchRegion = request.nextUrl.searchParams.get('watchRegion')
    if (watchRegion) params.set('watch_region', watchRegion)
  } else if (endpoint === 'provider-regions') {
    tmdbPath = 'watch/providers/regions'
  } else if (endpoint === 'today') {
    const mediaType = request.nextUrl.searchParams.get('mediaType') === 'tv' ? 'tv' : 'movie'
    tmdbPath = `discover/${mediaType}`
    const date = request.nextUrl.searchParams.get('date')
    if (date) params.set(mediaType === 'tv' ? 'first_air_date.gte' : 'primary_release_date.gte', date)
    if (date) params.set(mediaType === 'tv' ? 'first_air_date.lte' : 'primary_release_date.lte', date)
    params.set('sort_by', 'popularity.desc')
  }

  const target = new URL(`${TMDB_BASE_URL}/${tmdbPath}`)
  params.forEach((value, key) => target.searchParams.set(key, value))
  target.searchParams.set('api_key', TMDB_API_KEY)

  const response = await fetch(target, { next: { revalidate: 300 } })
  const rawBody = await response.json()
  const mapMedia = (item: Record<string, unknown>, fallback?: string) => ({
    id: typeof item.id === 'number' ? item.id : 0,
    mediaType: item.media_type === 'tv' || fallback === 'tv' ? 'tv' : 'movie',
    title: String(item.title ?? item.name ?? 'Untitled'),
    overview: String(item.overview ?? ''),
    posterPath: typeof item.poster_path === 'string' ? item.poster_path : null,
    backdropPath: typeof item.backdrop_path === 'string' ? item.backdrop_path : null,
    voteAverage: typeof item.vote_average === 'number' ? item.vote_average : 0,
    releaseDate: String(item.release_date ?? item.first_air_date ?? '') || null,
    genreIds: Array.isArray(item.genre_ids) ? item.genre_ids : [],
    originalLanguage: String(item.original_language ?? 'en'),
  })
  const body = endpoint === 'providers' && Array.isArray(rawBody.results)
    ? { data: rawBody.results.map((item: Record<string, unknown>) => ({ id: item.provider_id, name: item.provider_name, logoPath: item.logo_path, displayPriority: item.display_priority })) }
    : endpoint === 'provider-regions' && Array.isArray(rawBody.results)
      ? { data: rawBody.results.map((item: Record<string, unknown>) => ({ iso3166_1: item.iso_3166_1, englishName: item.english_name, nativeName: item.native_name })) }
      : endpoint === 'today'
        ? { page: 1, totalPages: 1, totalResults: Array.isArray(rawBody.results) ? rawBody.results.length : 0, results: (rawBody.results ?? []).map((item: Record<string, unknown>) => mapMedia(item)) }
        : { page: rawBody.page ?? 1, totalPages: rawBody.total_pages ?? 1, totalResults: rawBody.total_results ?? 0, results: (rawBody.results ?? []).filter((item: Record<string, unknown>) => item.media_type !== 'person').map((item: Record<string, unknown>) => mapMedia(item, request.nextUrl.searchParams.get('mediaType') ?? undefined)) }

  return new NextResponse(JSON.stringify(body), {
    status: response.status,
    headers: {
      'content-type': response.headers.get('content-type') ?? 'application/json',
      'cache-control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  })
}
