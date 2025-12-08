import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import Home from './pages/Home'
import { Footer } from './components/Footer.jsx'
import Search from './pages/Search'
import NotFoundPage from './pages/404'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router'
import JobDetails from './pages/Details'

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
