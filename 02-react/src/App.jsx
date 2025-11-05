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
    const [location, setLocation] = useState('');
    const [technology, setTechnology] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const totalPages = Math.ceil(jobsData.length / ITEMS_PER_PAGE)
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleTechnologyChange = (technology) => {
        setTechnology(technology)
    }

    const handleLocationChange = (location) => {
        console.log('location', location)
        setLocation(location)
    }

    const handleExperienceLevelChange = (experienceLevel) => {
        setExperienceLevel(experienceLevel)
    }

    const handleSearchChange = (searchValue) => {
        setSearchValue(searchValue)
    }

    const jobsFiltered = jobsData.filter(job => {
        return job.data.location.toLowerCase().includes(location.toLowerCase()) 
        && job.data.technologies.some(tech => tech.toLowerCase().includes(technology.join(',').toLowerCase())) 
        && job.data.level.toLowerCase().includes(experienceLevel.toLowerCase())
        && (searchValue === '' || job.title.toLowerCase().includes(searchValue.toLowerCase()));
    })

    const jobsPaginated = jobsFiltered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    return (
        <>
            <Header />
            <main>
                <section className="jobs-search">
                    <h1>Find your Next Job</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <SearchForm 
                        onSearchChange={(searchValue)=>handleSearchChange(searchValue)}
                        onLocationChange={(location)=>handleLocationChange(location)} 
                        onTechnologyChange={(technology)=>handleTechnologyChange(technology)} 
                        onExperienceLevelChange={(experienceLevel)=>handleExperienceLevelChange(experienceLevel)}/>
                </section>
                <section className="job-listings">
                    <Joblisting jobs={jobsPaginated} totalJobsQty={jobsFiltered.length} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => handlePageChange(page)}/>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
