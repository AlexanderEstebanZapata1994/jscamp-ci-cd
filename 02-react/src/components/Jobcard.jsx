export function JobCard({job}) {
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
      <button className="button-apply-job">Apply Now</button>
    </article>
  )
}