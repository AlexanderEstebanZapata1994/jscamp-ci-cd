import { useEffect } from 'react';

// Putting the extension is a good practice to avoid performance issues with the browser
import { Pagination } from '../components/Pagination.jsx'
import { SearchForm } from '../components/SearchForm.jsx'
import { Joblisting } from '../components/Joblisting.jsx'
import { useFilters } from '../hooks/useFilters.jsx';

export const Search = () => {
    // TODO: issue when located in the second page and the user tries filtering the jobs, showing results in pagination but not the cards.
    const { handlePageChange, handleFiltersChange, jobsPaginated, totalPages, currentPage, jobsDataWithAllFilters } = useFilters();
    
    useEffect(() => {
        // const urlParams = new URLSearchParams(window.location.search);
        if (jobsDataWithAllFilters.length > 0) {
            document.title = `Results  ${jobsDataWithAllFilters.length}, Page ${currentPage} DevJobs`;
        } else {
            document.title = `No results found DevJobs`;
        }
    }, [jobsDataWithAllFilters, currentPage]) // By default [], the component will be rendered only once, but we can use useEffect to render the component again when the component is mounted
    return (
        <main>
            <section className="jobs-search">
                <h1>Find your Next Job</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <SearchForm onFiltersChange={(filters)=>handleFiltersChange(filters)} />
            </section>
            <section className="job-listings">
                <Joblisting jobs={jobsPaginated} 
                            totalJobsQty={jobsDataWithAllFilters.length} />
                <Pagination currentPage={currentPage} 
                            totalPages={totalPages} 
                            onPageChange={(page) => handlePageChange(page)}
                />
            </section>
        </main>
    )
}
