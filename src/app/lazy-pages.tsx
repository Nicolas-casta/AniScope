import { lazy } from 'react'

export const AnimeListPage = lazy(() => import('../modules/anime/pages/anime-list.page'))
export const AnimeDetailPage = lazy(() => import('../modules/anime/pages/anime-detail.page'))
export const FavoritesPage = lazy(() => import('../modules/favorites/pages/favorites.page'))