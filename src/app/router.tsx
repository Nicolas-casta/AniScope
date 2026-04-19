import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnimeListPage from '../modules/anime/pages/anime-list.page'
import AnimeDetailPage from '../modules/anime/pages/anime-detail.page'
import FavoritesPage from '../modules/favorites/pages/favorites.page'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AnimeListPage />} />
                <Route path="/anime/:id" element={<AnimeDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router