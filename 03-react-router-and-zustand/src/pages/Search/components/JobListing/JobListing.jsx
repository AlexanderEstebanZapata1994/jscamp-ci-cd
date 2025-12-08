import JobCard from '../JobCard/index.js'
import styles from './JobListing.module.css'

export function JobListing({jobs, totalJobsQty}) {
  return (
    <>
      <h3>Showing {jobs.length} of {totalJobsQty} results</h3>
      { jobs.length === 0 ? <p style={{ textAlign: 'balance', padding: '20px', margin: '20px', border: '1px solid var(--border)', borderRadius: '10px' }}>No results found for your search, try again with different keywords or filters.</p> : (
        <div className={styles.jobCards}>
          {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      )}
    </>
  )
}