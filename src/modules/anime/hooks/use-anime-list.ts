import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { animeKeys } from './query-keys'
import { fetchAnimeList } from '../services/anime.service'
import type { AnimeFilters } from '../types'

function useAnimeList(filters: AnimeFilters) {
    return useQuery({
        queryKey: animeKeys.list(filters),
        queryFn: () => fetchAnimeList(filters),
        placeholderData: keepPreviousData,
    })
}

export default useAnimeList