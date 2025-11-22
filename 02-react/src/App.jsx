import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Home } from './pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Search } from './pages/Search/Search.jsx'
import { NotFoundPage } from './pages/404/404.jsx'
import { Route } from './components/Route.jsx'

function App() {

    const acceptedRoutes = ['/', '/search']

    if (!acceptedRoutes.includes(window.location.pathname)) {
        return <NotFoundPage />
    }
    return (
        <>
            <Header />
            <Route path="/" component={<Home />} />
            <Route path="/search" component={<Search />} />
            <Route path="/404" component={<NotFoundPage />} />
            <Footer />
        </>
    )
}

export default App
