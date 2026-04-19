import type { AnimeStatus } from '../../modules/anime/types'

interface Props {
    variant: 'status' | 'genre' | 'season'
    label: string
}

const statusColors: Record<AnimeStatus, string> = {
    'Currently Airing': 'bg-green-100 text-green-700',
    'Finished Airing': 'bg-gray-100 text-gray-700',
    'Not yet aired': 'bg-yellow-100 text-yellow-700',
}

function Badge({ variant, label }: Props) {
    let colorClass = 'bg-blue-100 text-blue-700'

    if (variant === 'status') {
        colorClass = statusColors[label as AnimeStatus] ?? colorClass
    }

    return (
        <span className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
            {label}
        </span>
    )
}

export default Badge