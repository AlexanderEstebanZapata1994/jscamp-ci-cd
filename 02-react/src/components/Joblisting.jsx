export function Joblisting({jobs}) {
  return (
    <>
      <h2>Results of the search {jobs.length} jobs found</h2>
      <div className="job-cards">
      </div>
    </>
  )
}