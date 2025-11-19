import { Header } from './components/Header.jsx' // Putting the extension is a good practice to avoid performance issues with the browser
import { Home } from './pages/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Search } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'

import { useRouter } from './hooks/useRouter.jsx'

function App() {
    const { currentPath } = useRouter();

    let pageContent = <NotFoundPage />;

    if (currentPath === '/search') {
        pageContent = <Search />
    } else if (currentPath === '/') {
        pageContent = <Home />
    }

    return (
        <>
            <Header />
            {pageContent}
            <Footer />
        </>
    )
}

export default App
