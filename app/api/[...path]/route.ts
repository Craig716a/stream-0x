import { NextRequest, NextResponse } from 'next/server'

const TMDB_API_KEY = process.env.TMDB_API_KEY ?? '279f8517761964c261b646f807bc633a'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params
  const target = new URL(`${TMDB_BASE_URL}/${path.join('/')}`)

  request.nextUrl.searchParams.forEach((value, key) => target.searchParams.set(key, value))
  target.searchParams.set('api_key', TMDB_API_KEY)

  const response = await fetch(target, { next: { revalidate: 300 } })
  const body = await response.text()

  return new NextResponse(body, {
    status: response.status,
    headers: {
      'content-type': response.headers.get('content-type') ?? 'application/json',
      'cache-control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  })
}
