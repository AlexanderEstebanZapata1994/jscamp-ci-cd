

import styles from './FavoriteButton.module.css'
import { useFavoritesStore } from '../../store/useFavoritesStore.jsx'
export function FavoriteButton({ jobId, className = styles.favoriteButtonDefault }) {

    const { isFavorite, toggleFavorite } = useFavoritesStore()
    return (
        <button 
            className={className} 
            onClick={() => toggleFavorite(jobId)}
            aria-label={`Toggle favorite for job ${jobId}`}
        >
            { isFavorite(jobId) ? '❤️' : '🤍' }
        </button>
    )
}