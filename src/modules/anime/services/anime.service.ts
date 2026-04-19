import apiClient from '../../../core/api/api-client'
import type { AnimeFilters } from '../types'

export async function fetchAnimeList(filters: AnimeFilters) {
    const params: Record<string, string | number> = {
        page: filters.page,
        limit: 20,
    }

    if (filters.query) params.q = filters.query
    if (filters.genreId) params.genres = filters.genreId
    if (filters.status !== 'all') params.status = filters.status

    const response = await apiClient.get('/anime', { params })
    return response.data
}

export async function fetchAnimeById(id: number) {
    const response = await apiClient.get(`/anime/${id}`)
    return response.data
}

export async function fetchGenres() {
    const response = await apiClient.get('/genres/anime')
    return response.data
}