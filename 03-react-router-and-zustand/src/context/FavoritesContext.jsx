import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider ({children}){
    const [favorites, setFavorites] = useState([])

    const addFavorite = (job) => {
        setFavorites(prevFavorites => [...prevFavorites, job])
    }

    const removeFavorite = (job) => {
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== job.id))
    }

    const isFavorite = (job) => {
        return favorites.some(favorite => favorite.id === job.id)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext value={value}>
        {children}
    </FavoritesContext>
}