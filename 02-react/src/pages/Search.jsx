import { useEffect, useState } from 'react';

// Putting the extension is a good practice to avoid performance issues with the browser
import { Pagination } from '../components/Pagination.jsx'
import { SearchForm } from '../components/SearchForm.jsx'
import { Joblisting } from '../components/Joblisting.jsx'

import jobsData from '../data/jobs.json';

const ITEMS_PER_PAGE = 6;

export const Search = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [textToFilter, setTextToFilter] = useState('');
    const [location, setLocation] = useState('');
    const [technology, setTechnology] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState('');

    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (filters) => {
        setTextToFilter(filters.textToFilter)
        setLocation(filters.location)
        setTechnology(filters.technology)
        setExperienceLevel(filters.experienceLevel)
    }

    const jobsFilteredWithText = jobsData.filter(job => (textToFilter === '' || job.title.toLowerCase().includes(textToFilter.toLowerCase())))

    const jobsDataWithAllFilters = jobsFilteredWithText.filter(job => 
            (location           === '' || job.data.location.toLowerCase().includes(location.toLowerCase()))
        &&  (technology         === '' || job.data.technologies.some(tech => tech.toLowerCase().includes(technology))) 
        &&  (experienceLevel    === '' || job.data.level.toLowerCase().includes(experienceLevel.toLowerCase())))

    const totalPages = Math.ceil(jobsDataWithAllFilters.length / ITEMS_PER_PAGE)
    const jobsPaginated = jobsDataWithAllFilters.slice(
            (currentPage - 1) * ITEMS_PER_PAGE, 
            currentPage * ITEMS_PER_PAGE
    )
    
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
