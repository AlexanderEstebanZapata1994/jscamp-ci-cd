import { useState } from "react"

export function JobCard({job}) {

  const [isApplied, setIsApplied] = useState(false)
  const handleClickApplied = () => {
    setIsApplied(true)
  }

  const buttonStyle = isApplied ? 'button-apply-job is-applied' : 'button-apply-job' // TODO: Apply CSS with module.css
  const buttonText = isApplied ? 'Applied' : 'Apply Now'
  return (
    <article className="job-card"
      data-title={job.titutlo}
      data-level={job.data.nivel}
      data-location={job.data.modalidad}
      data-technologies={job.data.technology}
    >
      <div>
        <h3>{job.titulo}</h3>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>
      <button className={buttonStyle} onClick={handleClickApplied}>{buttonText}</button>
    </article>
  )
}