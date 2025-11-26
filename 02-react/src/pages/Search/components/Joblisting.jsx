import { JobCard } from '../components/Jobcard.jsx'

export function Joblisting({jobs, totalJobsQty}) {
  return (
    <>
      <h3>Showing {jobs.length} of {totalJobsQty} results</h3>
      { jobs.length === 0 ? <p style={{ textAlign: 'balance', padding: '20px', margin: '20px', border: '1px solid white', borderRadius: '10px' }}>No results found for your search, try again with different keywords or filters.</p> : (
        <div className="job-cards">
          {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      )}
    </>
  )
}