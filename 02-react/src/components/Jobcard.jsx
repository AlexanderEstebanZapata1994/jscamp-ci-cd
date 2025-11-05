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
      data-title={job.title}
      data-level={job.data.level}
      data-location={job.data.location}
      data-technologies={job.data.technologies}
    >
      <div>
        <h3>{job.title}</h3>
        <small>{job.company} | {job.location}</small>
        <p>{job.description}</p>
      </div>
      <button className={buttonStyle} onClick={handleClickApplied}>{buttonText}</button>
    </article>
  )
}