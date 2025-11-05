import { useState } from 'react';

import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Footer } from './components/Footer.jsx'
import { Pagination } from './components/Pagination.jsx'
import { SearchForm } from './components/SearchForm.jsx'
import { Joblisting } from './components/Joblisting.jsx'

import jobsData from './data/jobs.json';

const ITEMS_PER_PAGE = 6;

function App() {
    const [currentPage, setCurrentPage] = useState(1);

    const [searchValue, setSearchValue] = useState('');
    const [location, setLocation] = useState('');
    const [technology, setTechnology] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState('');

    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (filters) => {
        setSearchValue(filters.searchValue)
        setLocation(filters.location)
        setTechnology(filters.technology)
        setExperienceLevel(filters.experienceLevel)
    }

    const jobsFilteredWithText = jobsData.filter(job => (searchValue === '' || job.title.toLowerCase().includes(searchValue.toLowerCase())))

    const jobsDataWithAllFilters = jobsFilteredWithText.filter(job => 
            (location           === '' || job.data.location.toLowerCase().includes(location.toLowerCase()))
        &&  (technology         === '' || job.data.technologies.some(tech => tech.toLowerCase().includes(technology))) 
        &&  (experienceLevel    === '' || job.data.level.toLowerCase().includes(experienceLevel.toLowerCase())))

    const totalPages = Math.ceil(jobsDataWithAllFilters.length / ITEMS_PER_PAGE)
    const jobsPaginated = jobsDataWithAllFilters.slice(
            (currentPage - 1) * ITEMS_PER_PAGE, 
            currentPage * ITEMS_PER_PAGE
    )
    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default App
