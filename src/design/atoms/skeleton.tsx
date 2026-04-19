interface Props {
    className?: string
}

function Skeleton({ className }: Props) {
    return (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
    )
}

export default Skeleton