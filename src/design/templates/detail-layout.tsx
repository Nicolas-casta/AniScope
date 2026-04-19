interface Props {
    children: React.ReactNode
    onBack: () => void
}

function DetailLayout({ children, onBack }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b px-6 py-4">
                <button onClick={onBack} className="text-sm text-blue-600">
                    Volver
                </button>
            </header>
            <main className="max-w-3xl mx-auto px-6 py-6">
                {children}
            </main>
        </div>
    )
}

export default DetailLayout