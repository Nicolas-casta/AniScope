import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimeListPage, AnimeDetailPage, FavoritesPage } from './lazy-pages'
import { Suspense } from 'react'

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p className="text-center py-12">Cargando...</p>}>
                <Routes>
                    <Route path="/" element={<AnimeListPage />} />
                    <Route path="/anime/:id" element={<AnimeDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router