import { useState } from "react"
import { Link } from "../../../../components/Link/Link.jsx"
import styles from './JobCard.module.css'

export default function JobCard({job}) {

  const [isApplied, setIsApplied] = useState(false)
  const handleClickApplied = (e) => {
    e.stopPropagation()
    setIsApplied(true)
  }
  const buttonText = isApplied ? 'Applied' : 'Apply Now'
  return (
    <Link 
      href={`/jobs/${job.id}`} 
      className={styles.cardLink} 
      aria-label={`View job details for ${job.titulo} by ${job.empresa}`}
    >
      <article 
        className={styles.jobCard} 
        aria-label={`Job card for ${job.titulo} by ${job.empresa}`}
      >
        <div className={styles.jobCardContent}>
          <h3>{job.titulo}</h3>
          <small><span className={styles.icon}>🏢</span>{job.empresa} | <span className={styles.icon}>📍</span>{job.ubicacion}</small>
          <p>{job.descripcion}</p>
        </div>
        <div className={styles.actions}>
          <Link href={`/jobs/${job.id}`} className={styles.actionLink}>Ver detalles</Link>
          <button className={`${isApplied ? styles.isApplied : ''}`} onClick={e => handleClickApplied(e)}>
            {buttonText}
          </button>
        </div>
      </article>
    </Link>
  )
}