import { useEffect } from 'react';

// Putting the extension is a good practice to avoid performance issues with the browser
import { Pagination } from '../../components/Pagination/Pagination.jsx'
import SearchForm from './components/SearchForm/index.js'
import { Joblisting } from './components/Joblisting.jsx'
import { useFilters } from '../../hooks/useFilters.jsx';
import Spinner from '../../components/Spinner/index.js';

export default function Search() {
    const { 
        loading,
        error,
        jobs,
        total,
        totalPages,
        currentPage,
        handlePageChange,
        handleFiltersChange } = useFilters();

    useEffect(() => {
        if (total > 0) {
            document.title = `Results  ${total}, Page ${currentPage} DevJobs`;
        } else {
            document.title = `No results found DevJobs`;
        }
    }, [total, currentPage]) // By default [], the component will be rendered only once, but we can use useEffect to render the component again when the component is mounted
    return (
        <main>
            <section className="jobs-search">
                <h1>Find your Next Job</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <SearchForm onFiltersChange={(filters)=>handleFiltersChange(filters)} />
            </section>
            <section className="job-listings">
                { loading && !error ? 
                    <Spinner
                        text="Retrieving jobs..."
                        width="200px"
                        height="200px"
                        animationDuration=".5s"
                        borderWidth="5px"
                    /> : error ? <p>{error}</p> : (
                    <Joblisting 
                        jobs={jobs} 
                        totalJobsQty={total} 
                    />
                )}

                {totalPages >= 1 && (
                    <Pagination 
                        currentPage = { currentPage || 1 } 
                        totalPages = { totalPages } 
                        onPageChange={(page) => handlePageChange(page)}
                    />
                )}
            </section>
        </main>
    )
}
