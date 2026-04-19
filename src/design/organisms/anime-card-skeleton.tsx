import Skeleton from '../atoms/skeleton'

function AnimeCardSkeleton() {
    return (
        <div className="border rounded bg-white">
            <Skeleton className="w-full h-48 rounded-t" />
            <div className="p-3 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
            </div>
        </div>
    )
}

export default AnimeCardSkeleton