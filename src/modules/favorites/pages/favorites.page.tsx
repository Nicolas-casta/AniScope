import { useNavigate } from 'react-router-dom'
import useFavorites from '../hooks/use-favorites'
import { AnimeCard, ListLayout } from '../../../design'
import type { Anime } from '../../anime/types'

function FavoritesPage() {
    const navigate = useNavigate()
    const { favorites } = useFavorites()

    return (
        <ListLayout>
            <h2 className="text-lg font-bold mb-4">Mis favoritos</h2>

            {favorites.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-3">No tienes favoritos guardados</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
                    >
                        Explorar anime
                    </button>
                </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {favorites.map((anime: Anime) => (
                    <AnimeCard
                        key={anime.mal_id}
                        anime={anime}
                        onSelect={(id) => navigate(`/anime/${id}`)}
                    />
                ))}
            </div>
        </ListLayout>
    )
}

export default FavoritesPage