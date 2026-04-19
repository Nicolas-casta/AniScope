import { useQuery } from '@tanstack/react-query'
import { animeKeys } from './query-keys'
import { fetchAnimeById } from '../services/anime.service'

function useAnimeDetail(id: number | null) {
    return useQuery({
        queryKey: animeKeys.detail(id!),
        queryFn: () => fetchAnimeById(id!),
        enabled: id !== null,
    })
}

export default useAnimeDetail