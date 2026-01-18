import { Link } from "../../../../components/Link/Link.jsx"
import styles from './JobCard.module.css'
import { FavoriteButton } from "./components/FavoriteButton/FavoriteButton.jsx"
import { ApplyJobButton } from "./components/ApplyJobButton/ApplyJobButton.jsx"
export default function JobCard({job}) {

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
          <ApplyJobButton jobId={job.id}/>
          <Link href={`/jobs/${job.id}`} className={styles.actionLink}>Ver detalles</Link>
          <FavoriteButton jobId={job.id} />
        </div>
      </article>
  )
}