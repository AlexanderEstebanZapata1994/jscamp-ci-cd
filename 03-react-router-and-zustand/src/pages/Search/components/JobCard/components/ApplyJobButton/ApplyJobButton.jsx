import styles from './ApplyJobButton.module.css'
import { useAuthStore } from '../../../../../../store/useAuthStore.jsx'
import { useState } from 'react'

export function ApplyJobButton({ jobId }) {
    const { isLoggedIn } = useAuthStore()
    const [isApplied, setIsApplied] = useState(false)
    const handleClickApplied = () => {
        setIsApplied(true)
        console.log(`Applying job ${jobId}`)
    }

    const buttonText = !isLoggedIn ? 'Login to apply' : (isApplied ? 'Applied' : 'Apply Now');
    return (
        <button 
            disabled={!isLoggedIn}
            className={`${styles.applyNowButton} ${isApplied ? styles.isApplied : ''}`} 
            onClick={handleClickApplied}
            aria-label={`Apply for job`}
        >
            {buttonText}
        </button>
    )
}