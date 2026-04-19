import { useState } from 'react'
import useDebounce from '../../../core/hooks/use-debounce'
import type { AnimeFilters } from '../types'

function useAnimeFilters() {
    const [filters, setFilters] = useState<AnimeFilters>({
        query: '',
        genreId: null,
        status: 'all',
        page: 1,
    })

    const debouncedQuery = useDebounce(filters.query, 500)

    const handleQuery = (query: string) => {
        setFilters(prev => ({ ...prev, query, page: 1 }))
    }

    const handleGenre = (genreId: number | null) => {
        setFilters(prev => ({ ...prev, genreId, page: 1 }))
    }

    const handleStatus = (status: AnimeFilters['status']) => {
        setFilters(prev => ({ ...prev, status, page: 1 }))
    }

    const handlePage = (page: number) => {
        setFilters(prev => ({ ...prev, page }))
    }

    return {
        filters: { ...filters, query: debouncedQuery },
        handleQuery,
        handleGenre,
        handleStatus,
        handlePage,
    }
}

export default useAnimeFilters