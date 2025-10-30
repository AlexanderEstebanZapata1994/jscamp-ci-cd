import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Footer } from './components/Footer.jsx'
import { Pagination } from './components/Pagination.jsx'
import { SearchForm } from './components/SearchForm.jsx'
import { Joblisting } from './components/Joblisting.jsx'
import { useState } from 'react';
import jobs from './data/jobs.json';

const ITEMS_PER_PAGE = 2;
function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE)
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const jobsFiltered = jobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    return (
        <>
            <Header />
            <main>
                <section className="jobs-search">
                    <h1>Find your Next Job</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <SearchForm />
                </section>
                <section className="job-listings">
                    <Joblisting jobs={jobsFiltered} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) =>handlePageChange(page)}/>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
