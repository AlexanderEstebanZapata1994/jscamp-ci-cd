import { JobCard } from './Jobcard.jsx'

export function Joblisting({jobs}) {
  return (
    <>
      <h2>Results of the search {jobs.length}</h2>
      <div className="job-cards">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  )
}