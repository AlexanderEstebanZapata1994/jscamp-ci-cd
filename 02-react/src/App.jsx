import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Footer } from './components/Footer.jsx'
import { Pagination } from './components/Pagination.jsx'
import { SearchForm } from './components/SearchForm.jsx'
import { Joblisting } from './components/Joblisting.jsx'

function App() {
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
                    <Joblisting />
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
