import type { DataTag, DefinedInitialDataOptions, DefinedUseQueryResult, QueryClient, QueryKey, UndefinedInitialDataOptions, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, CatalogPage, GetCatalogParams, GetProviderCatalogParams, GetTodayParams, GetTrendingParams, HealthStatus, MediaType, ProviderRegion, ProviderRegionOption, SearchCatalogParams, SeasonDetails, TitleDetails, WatchProvider } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof healthCheck>>, TError, Awaited<ReturnType<typeof healthCheck>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof healthCheck>>, TError, Awaited<ReturnType<typeof healthCheck>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetCatalogUrl: (params: GetCatalogParams) => string;
/**
 * @summary Discover movies or television series
 */
export declare const getCatalog: (params: GetCatalogParams, options?: Parameters<typeof customFetch>[1]) => Promise<CatalogPage>;
export declare const getGetCatalogQueryKey: (params?: GetCatalogParams) => readonly ["/api/tmdb/discover", ...GetCatalogParams[]];
export declare const getGetCatalogQueryOptions: <TData = Awaited<ReturnType<typeof getCatalog>>, TError = ErrorType<ApiError>>(params: GetCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCatalog>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetCatalogQueryResult = NonNullable<Awaited<ReturnType<typeof getCatalog>>>;
export type GetCatalogQueryError = ErrorType<ApiError>;
export declare function useGetCatalog<TData = Awaited<ReturnType<typeof getCatalog>>, TError = ErrorType<ApiError>>(params: GetCatalogParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCatalog>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getCatalog>>, TError, Awaited<ReturnType<typeof getCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCatalog<TData = Awaited<ReturnType<typeof getCatalog>>, TError = ErrorType<ApiError>>(params: GetCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCatalog>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getCatalog>>, TError, Awaited<ReturnType<typeof getCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCatalog<TData = Awaited<ReturnType<typeof getCatalog>>, TError = ErrorType<ApiError>>(params: GetCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetTodayUrl: (params: GetTodayParams) => string;
/**
 * @summary Get titles released or airing on a date
 */
export declare const getToday: (params: GetTodayParams, options?: Parameters<typeof customFetch>[1]) => Promise<CatalogPage>;
export declare const getGetTodayQueryKey: (params?: GetTodayParams) => readonly ["/api/tmdb/today", ...GetTodayParams[]];
export declare const getGetTodayQueryOptions: <TData = Awaited<ReturnType<typeof getToday>>, TError = ErrorType<ApiError>>(params: GetTodayParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getToday>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getToday>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetTodayQueryResult = NonNullable<Awaited<ReturnType<typeof getToday>>>;
export type GetTodayQueryError = ErrorType<ApiError>;
export declare function useGetToday<TData = Awaited<ReturnType<typeof getToday>>, TError = ErrorType<ApiError>>(params: GetTodayParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getToday>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getToday>>, TError, Awaited<ReturnType<typeof getToday>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetToday<TData = Awaited<ReturnType<typeof getToday>>, TError = ErrorType<ApiError>>(params: GetTodayParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getToday>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getToday>>, TError, Awaited<ReturnType<typeof getToday>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetToday<TData = Awaited<ReturnType<typeof getToday>>, TError = ErrorType<ApiError>>(params: GetTodayParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getToday>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetTrendingUrl: (params?: GetTrendingParams) => string;
/**
 * @summary Get trending worldwide titles
 */
export declare const getTrending: (params?: GetTrendingParams, options?: Parameters<typeof customFetch>[1]) => Promise<CatalogPage>;
export declare const getGetTrendingQueryKey: (params?: GetTrendingParams) => readonly ["/api/tmdb/trending", ...GetTrendingParams[]];
export declare const getGetTrendingQueryOptions: <TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<ApiError>>(params?: GetTrendingParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetTrendingQueryResult = NonNullable<Awaited<ReturnType<typeof getTrending>>>;
export type GetTrendingQueryError = ErrorType<ApiError>;
export declare function useGetTrending<TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<ApiError>>(params: undefined | GetTrendingParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getTrending>>, TError, Awaited<ReturnType<typeof getTrending>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTrending<TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<ApiError>>(params?: GetTrendingParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getTrending>>, TError, Awaited<ReturnType<typeof getTrending>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTrending<TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<ApiError>>(params?: GetTrendingParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getSearchCatalogUrl: (params: SearchCatalogParams) => string;
/**
 * @summary Search movies and television series
 */
export declare const searchCatalog: (params: SearchCatalogParams, options?: Parameters<typeof customFetch>[1]) => Promise<CatalogPage>;
export declare const getSearchCatalogQueryKey: (params?: SearchCatalogParams) => readonly ["/api/tmdb/search", ...SearchCatalogParams[]];
export declare const getSearchCatalogQueryOptions: <TData = Awaited<ReturnType<typeof searchCatalog>>, TError = ErrorType<unknown>>(params: SearchCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type SearchCatalogQueryResult = NonNullable<Awaited<ReturnType<typeof searchCatalog>>>;
export type SearchCatalogQueryError = ErrorType<unknown>;
export declare function useSearchCatalog<TData = Awaited<ReturnType<typeof searchCatalog>>, TError = ErrorType<unknown>>(params: SearchCatalogParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, Awaited<ReturnType<typeof searchCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSearchCatalog<TData = Awaited<ReturnType<typeof searchCatalog>>, TError = ErrorType<unknown>>(params: SearchCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, Awaited<ReturnType<typeof searchCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSearchCatalog<TData = Awaited<ReturnType<typeof searchCatalog>>, TError = ErrorType<unknown>>(params: SearchCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetProviderCatalogUrl: (params: GetProviderCatalogParams) => string;
/**
 * @summary Get supported streaming providers for a media type
 */
export declare const getProviderCatalog: (params: GetProviderCatalogParams, options?: Parameters<typeof customFetch>[1]) => Promise<WatchProvider[]>;
export declare const getGetProviderCatalogQueryKey: (params?: GetProviderCatalogParams) => readonly ["/api/tmdb/providers", ...GetProviderCatalogParams[]];
export declare const getGetProviderCatalogQueryOptions: <TData = Awaited<ReturnType<typeof getProviderCatalog>>, TError = ErrorType<unknown>>(params: GetProviderCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetProviderCatalogQueryResult = NonNullable<Awaited<ReturnType<typeof getProviderCatalog>>>;
export type GetProviderCatalogQueryError = ErrorType<unknown>;
export declare function useGetProviderCatalog<TData = Awaited<ReturnType<typeof getProviderCatalog>>, TError = ErrorType<unknown>>(params: GetProviderCatalogParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, Awaited<ReturnType<typeof getProviderCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetProviderCatalog<TData = Awaited<ReturnType<typeof getProviderCatalog>>, TError = ErrorType<unknown>>(params: GetProviderCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, Awaited<ReturnType<typeof getProviderCatalog>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetProviderCatalog<TData = Awaited<ReturnType<typeof getProviderCatalog>>, TError = ErrorType<unknown>>(params: GetProviderCatalogParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderCatalog>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetProviderRegionsUrl: () => string;
/**
 * @summary Get countries supported by TMDb watch providers
 */
export declare const getProviderRegions: (options?: Parameters<typeof customFetch>[1]) => Promise<ProviderRegionOption[]>;
export declare const getGetProviderRegionsQueryKey: () => readonly ["/api/tmdb/provider-regions"];
export declare const getGetProviderRegionsQueryOptions: <TData = Awaited<ReturnType<typeof getProviderRegions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetProviderRegionsQueryResult = NonNullable<Awaited<ReturnType<typeof getProviderRegions>>>;
export type GetProviderRegionsQueryError = ErrorType<unknown>;
export declare function useGetProviderRegions<TData = Awaited<ReturnType<typeof getProviderRegions>>, TError = ErrorType<unknown>>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, Awaited<ReturnType<typeof getProviderRegions>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetProviderRegions<TData = Awaited<ReturnType<typeof getProviderRegions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, Awaited<ReturnType<typeof getProviderRegions>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetProviderRegions<TData = Awaited<ReturnType<typeof getProviderRegions>>, TError = ErrorType<unknown>>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProviderRegions>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetTitleDetailsUrl: (mediaType: MediaType, id: number) => string;
/**
 * @summary Get a title and its seasons
 */
export declare const getTitleDetails: (mediaType: MediaType, id: number, options?: Parameters<typeof customFetch>[1]) => Promise<TitleDetails>;
export declare const getGetTitleDetailsQueryKey: (mediaType: MediaType, id: number) => readonly [`/api/tmdb/title/movie/${number}` | `/api/tmdb/title/tv/${number}`];
export declare const getGetTitleDetailsQueryOptions: <TData = Awaited<ReturnType<typeof getTitleDetails>>, TError = ErrorType<ApiError>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetTitleDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getTitleDetails>>>;
export type GetTitleDetailsQueryError = ErrorType<ApiError>;
export declare function useGetTitleDetails<TData = Awaited<ReturnType<typeof getTitleDetails>>, TError = ErrorType<ApiError>>(mediaType: MediaType, id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, Awaited<ReturnType<typeof getTitleDetails>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleDetails<TData = Awaited<ReturnType<typeof getTitleDetails>>, TError = ErrorType<ApiError>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, Awaited<ReturnType<typeof getTitleDetails>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleDetails<TData = Awaited<ReturnType<typeof getTitleDetails>>, TError = ErrorType<ApiError>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleDetails>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetSeasonDetailsUrl: (mediaType: "tv", id: number, seasonNumber: number) => string;
/**
 * @summary Get episodes for a television season
 */
export declare const getSeasonDetails: (mediaType: "tv", id: number, seasonNumber: number, options?: Parameters<typeof customFetch>[1]) => Promise<SeasonDetails>;
export declare const getGetSeasonDetailsQueryKey: (mediaType: "tv", id: number, seasonNumber: number) => readonly [`/api/tmdb/title/tv/${number}/season/${number}`];
export declare const getGetSeasonDetailsQueryOptions: <TData = Awaited<ReturnType<typeof getSeasonDetails>>, TError = ErrorType<ApiError>>(mediaType: "tv", id: number, seasonNumber: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetSeasonDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getSeasonDetails>>>;
export type GetSeasonDetailsQueryError = ErrorType<ApiError>;
export declare function useGetSeasonDetails<TData = Awaited<ReturnType<typeof getSeasonDetails>>, TError = ErrorType<ApiError>>(mediaType: 'tv', id: number, seasonNumber: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, Awaited<ReturnType<typeof getSeasonDetails>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSeasonDetails<TData = Awaited<ReturnType<typeof getSeasonDetails>>, TError = ErrorType<ApiError>>(mediaType: 'tv', id: number, seasonNumber: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, Awaited<ReturnType<typeof getSeasonDetails>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSeasonDetails<TData = Awaited<ReturnType<typeof getSeasonDetails>>, TError = ErrorType<ApiError>>(mediaType: 'tv', id: number, seasonNumber: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeasonDetails>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetTitleProvidersUrl: (mediaType: MediaType, id: number) => string;
/**
 * @summary Get streaming providers across all available regions
 */
export declare const getTitleProviders: (mediaType: MediaType, id: number, options?: Parameters<typeof customFetch>[1]) => Promise<ProviderRegion[]>;
export declare const getGetTitleProvidersQueryKey: (mediaType: MediaType, id: number) => readonly [`/api/tmdb/title/movie/${number}/providers` | `/api/tmdb/title/tv/${number}/providers`];
export declare const getGetTitleProvidersQueryOptions: <TData = Awaited<ReturnType<typeof getTitleProviders>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetTitleProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof getTitleProviders>>>;
export type GetTitleProvidersQueryError = ErrorType<unknown>;
export declare function useGetTitleProviders<TData = Awaited<ReturnType<typeof getTitleProviders>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, Awaited<ReturnType<typeof getTitleProviders>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleProviders<TData = Awaited<ReturnType<typeof getTitleProviders>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, Awaited<ReturnType<typeof getTitleProviders>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleProviders<TData = Awaited<ReturnType<typeof getTitleProviders>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleProviders>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getGetTitleRecommendationsUrl: (mediaType: MediaType, id: number) => string;
/**
 * @summary Get related movies or television series
 */
export declare const getTitleRecommendations: (mediaType: MediaType, id: number, options?: Parameters<typeof customFetch>[1]) => Promise<CatalogPage>;
export declare const getGetTitleRecommendationsQueryKey: (mediaType: MediaType, id: number) => readonly [`/api/tmdb/title/movie/${number}/recommendations` | `/api/tmdb/title/tv/${number}/recommendations`];
export declare const getGetTitleRecommendationsQueryOptions: <TData = Awaited<ReturnType<typeof getTitleRecommendations>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetTitleRecommendationsQueryResult = NonNullable<Awaited<ReturnType<typeof getTitleRecommendations>>>;
export type GetTitleRecommendationsQueryError = ErrorType<unknown>;
export declare function useGetTitleRecommendations<TData = Awaited<ReturnType<typeof getTitleRecommendations>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, Awaited<ReturnType<typeof getTitleRecommendations>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleRecommendations<TData = Awaited<ReturnType<typeof getTitleRecommendations>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, Awaited<ReturnType<typeof getTitleRecommendations>>>, 'initialData'>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetTitleRecommendations<TData = Awaited<ReturnType<typeof getTitleRecommendations>>, TError = ErrorType<unknown>>(mediaType: MediaType, id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitleRecommendations>>, TError, TData>>;
    request?: SecondParameter<typeof customFetch>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export {};
//# sourceMappingURL=api.d.ts.map