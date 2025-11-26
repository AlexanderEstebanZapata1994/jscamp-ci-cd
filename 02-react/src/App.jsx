import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import Home from './pages/Home'
import { Footer } from './components/Footer.jsx'
import Search from './pages/Search'
import NotFoundPage from './pages/404'
import { Route } from './components/Route.jsx'
import Contact from './pages/Contact'

function App() {

    return (
        <>
            <Header />
            <Route path="/" component={<Home />} />
            <Route path="/search" component={<Search />} />
            <Route path="/contact" component={<Contact />} />
            <Route path="/404" component={<NotFoundPage />} />
            <Footer />
        </>
    )
}

export default App
