import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import './styles/index.css'
import './styles/carrers.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FavoritesProvider> 
            <App /> 
        </FavoritesProvider>
    </BrowserRouter>
)
