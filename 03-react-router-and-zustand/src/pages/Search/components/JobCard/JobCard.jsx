import { useState } from "react"
import { Link } from "../../../../components/Link/Link.jsx"
import styles from './JobCard.module.css'
import { useFavoritesStore } from "../../../../store/useFavoritesStore.jsx"
import { FavoriteButton } from "../../../../components/FavoriteButton/FavoriteButton.jsx"


function ActionButton({ children, handleClick, style}) {
  return (
    <button className={style} onClick={ handleClick }>
      { children }
    </button>
  )
}
export default function JobCard({job}) {

  const [isApplied, setIsApplied] = useState(false)
  const handleClickApplied = (e) => {
    e.stopPropagation()
    setIsApplied(true)
  }
  const buttonText = isApplied ? 'Applied' : 'Apply Now'
  return (
      <article 
        className={styles.jobCard} 
        aria-label={`Job card for ${job.titulo} by ${job.empresa}`}
        data-modalidad={job.modalidad}
        data-nivel={job.nivel}
        data-technology={job.technology}
      >
        <div className={styles.jobCardContent}>
          <h3>
            <Link href={`/jobs/${job.id}`} className={styles.jobTitle} aria-label={`View job details for ${job.titulo} by ${job.empresa}`}>{job.titulo}</Link>
          </h3>
          <small><span className={styles.icon}>🏢</span>{job.empresa} | <span className={styles.icon}>📍</span>{job.ubicacion}</small>
          <p>{job.descripcion}</p>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.applyNowButton} ${isApplied ? styles.isApplied : ''}`} onClick={e => handleClickApplied(e)}>
            {buttonText}
          </button>
          <Link href={`/jobs/${job.id}`} className={styles.actionLink}>Ver detalles</Link>
          <FavoriteButton jobId={job.id} />
        </div>
      </article>
  )
}