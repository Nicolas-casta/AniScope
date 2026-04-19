import { useParams, useNavigate } from 'react-router-dom'
import useAnimeDetail from '../hooks/use-anime-detail'
import { DetailLayout, ErrorMessage } from '../../../design'

function AnimeDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const animeId = Number(id)

    const { data, isLoading, isError } = useAnimeDetail(animeId)

    const anime = data?.data

    if (isLoading) return <p className="text-center py-12">Cargando...</p>

    if (isError) return <ErrorMessage message="No se pudo cargar el anime" />

    if (!anime) return null

    return (
        <DetailLayout onBack={() => navigate('/')}>
            <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-64 object-cover rounded mb-4"
            />
            <h1 className="text-xl font-bold mb-1">{anime.title}</h1>
            <p className="text-gray-500 text-sm mb-3">{anime.title_english}</p>
            <p className="text-sm text-gray-600 mb-1">Score: {anime.score ?? 'N/A'}</p>
            <p className="text-sm text-gray-600 mb-1">Episodios: {anime.episodes ?? '?'}</p>
            <p className="text-sm text-gray-600 mb-3">Estado: {anime.status}</p>
            <p className="text-sm text-gray-700">{anime.synopsis}</p>
        </DetailLayout>
    )
}

export default AnimeDetailPage