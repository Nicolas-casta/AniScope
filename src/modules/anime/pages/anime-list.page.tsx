import { useNavigate } from 'react-router-dom'
import useAnimeList from '../hooks/use-anime-list'
import useAnimeFilters from '../hooks/use-anime-filters'
import type { Anime } from '../types'
import { ListLayout, AnimeCard, AnimeCardSkeleton, ErrorMessage, SearchBar } from '../../../design'

function AnimeListPage() {
    const navigate = useNavigate()
    const { filters, handleQuery, handlePage } = useAnimeFilters()
    const { data, isLoading, isError, refetch } = useAnimeList(filters)

    return (
        <ListLayout>
            <div className="mb-4">
                <SearchBar value={filters.query} onChange={handleQuery} />
            </div>

            {isLoading && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <AnimeCardSkeleton key={i} />
                    ))}
                </div>
            )}

            {isError && (
                <ErrorMessage message="No se pudo cargar el listado" onRetry={refetch} />
            )}

            {!isLoading && !isError && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {data?.data?.map((anime: Anime) => (
                        <AnimeCard
                            key={anime.mal_id}
                            anime={anime}
                            onSelect={(id) => navigate(`/anime/${id}`)}
                        />
                    ))}
                </div>
            )}

            <div className="flex justify-center gap-3 mt-6">
                <button
                    onClick={() => handlePage(filters.page - 1)}
                    disabled={filters.page === 1}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    Anterior
                </button>
                <span className="text-sm text-gray-600">Página {filters.page}</span>
                <button
                    onClick={() => handlePage(filters.page + 1)}
                    disabled={!data?.pagination?.has_next_page}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                >
                    Siguiente
                </button>
            </div>
        </ListLayout>
    )
}

export default AnimeListPage