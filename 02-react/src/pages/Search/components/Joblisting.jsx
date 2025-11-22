import { JobCard } from '../components/Jobcard.jsx'

export function Joblisting({jobs, totalJobsQty}) {
  return (
    <>
      <h3>Showing {jobs.length} of {totalJobsQty} results</h3>
      <div className="job-cards">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  )
}