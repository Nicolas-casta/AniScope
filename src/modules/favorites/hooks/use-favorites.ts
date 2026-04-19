import { useState, useEffect } from 'react'
import type { Anime } from '../../anime/types'

function useFavorites() {
    const [favorites, setFavorites] = useState<Anime[]>(() => {
        const saved = localStorage.getItem('favorites')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addFavorite = (anime: Anime) => {
        setFavorites(prev => [...prev, anime])
    }

    const removeFavorite = (id: number) => {
        setFavorites(prev => prev.filter(a => a.mal_id !== id))
    }

    const isFavorite = (id: number) => {
        return favorites.some(a => a.mal_id === id)
    }

    const clearFavorites = () => {
        setFavorites([])
    }

    return { favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }
}

export default useFavorites