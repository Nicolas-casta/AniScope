interface Props {
    children: React.ReactNode
}

function ListLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b px-6 py-4">
                <h1 className="text-xl font-bold">AniScope</h1>
            </header>
            <main className="max-w-6xl mx-auto px-6 py-6">
                {children}
            </main>
        </div>
    )
}

export default ListLayout