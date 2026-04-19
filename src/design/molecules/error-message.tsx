interface Props {
    message: string
    onRetry?: () => void
}

function ErrorMessage({ message, onRetry }: Props) {
    return (
        <div className="text-center py-12">
            <p className="text-red-500 mb-3">{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
                    Reintentar
                </button>
            )}
        </div>
    )
}

export default ErrorMessage