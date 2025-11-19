import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Search } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'
import { Router } from './components/Router.jsx'

function App() {

    return (
        <>
            <Header />
            <Router path="/" component={<Home />} />
            <Router path="/search" component={<Search />} />
            {/* TODO: Add a new route */}
            <Router path="*" component={<NotFoundPage />} />
            <Footer />
        </>
    )
}

export default App
