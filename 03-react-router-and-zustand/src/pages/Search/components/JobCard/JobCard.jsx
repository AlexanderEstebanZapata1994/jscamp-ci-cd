import { useState } from "react"
import { Link } from "../../../../components/Link/Link.jsx"
import styles from './JobCard.module.css'

export function JobCard({job}) {

  const [isApplied, setIsApplied] = useState(false)
  const handleClickApplied = () => {
    setIsApplied(true)
  }
  const buttonText = isApplied ? 'Applied' : 'Apply Now'
  return (
    <article className={styles.jobCard}>
      <div className={styles.jobCardContent}>
        <Link href={`/jobs/${job.id}`} className={styles.jobCardTitle}><h3>{job.titulo}</h3></Link>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>
      <button className={`${isApplied ? styles.isApplied : ''}`} onClick={handleClickApplied}>{buttonText}</button>
    </article>
  )
}