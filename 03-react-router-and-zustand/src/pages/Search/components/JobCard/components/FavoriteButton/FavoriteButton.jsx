

import styles from './FavoriteButton.module.css'
import { useFavoritesStore } from '../../../../../../store/useFavoritesStore.jsx'
import { useAuthStore } from '../../../../../../store/useAuthStore.jsx'
export function FavoriteButton({ jobId, className = styles.favoriteButtonDefault }) {

    const { isFavorite, toggleFavorite } = useFavoritesStore()
    const { isLoggedIn } = useAuthStore()
    return (
        <button 
            disabled={!isLoggedIn}
            className={className} 
            onClick={() => toggleFavorite(jobId)}
            aria-label={`Toggle favorite for job ${jobId}`}
        >
            { isFavorite(jobId) ? '❤️' : '🤍' }
        </button>
    )
}