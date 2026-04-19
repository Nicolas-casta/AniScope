import type { Anime } from '../../modules/anime/types'
import Badge from '../atoms/badge'

interface Props {
    anime: Anime
    onSelect: (id: number) => void
}

function AnimeCard({ anime, onSelect }: Props) {
    return (
        <div
            onClick={() => onSelect(anime.mal_id)}
            className="border rounded bg-white cursor-pointer hover:shadow-md transition-shadow"
        >
            <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-3">
                <p className="text-sm font-medium line-clamp-2 mb-2">{anime.title}</p>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 text-sm font-bold">
                        {anime.score ?? 'N/A'}
                    </span>
                    <span className="text-xs text-gray-500">
                        {anime.episodes ? `${anime.episodes} eps` : '? eps'}
                    </span>
                </div>
                <Badge variant="status" label={anime.status} />
            </div>
        </div>
    )
}

export default AnimeCard