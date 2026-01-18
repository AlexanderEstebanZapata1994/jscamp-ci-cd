import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Footer } from './components/Footer.jsx'
import { Routes, Route } from 'react-router'
import { useEffect, lazy, Suspense } from 'react'
import Spinner from './components/Spinner/index.js'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'

// pages imports
const HomePage = lazy(() => import('./pages/Home/index.js'))
const SearchPage = lazy(() => import('./pages/Search/index.js'))
const NotFoundPage = lazy(() => import('./pages/404/index.js'))
const ContactPage = lazy(() => import('./pages/Contact/index.js'))
const JobDetailsPage = lazy(() => import('./pages/Details/index.js'))
const ProfilePage = lazy(() => import('./pages/Profile/index.js'))
const LoginPage = lazy(() => import('./pages/Login/index.js'))
const RegisterPage = lazy(() => import('./pages/Register/index.js'))

function App() {

    useEffect(() => {
        document.title = `DevJobs - Find your dream job`
    }, []);
    return (
        <>
            <Header />
            <Suspense fallback={<Spinner text="Loading..." width="200px" height="200px" animationDuration=".5s" borderWidth="5px" color="red" />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                    <Route path="/jobs/:id" element={<JobDetailsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    )
}

export default App
