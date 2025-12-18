import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import './styles/index.css'
import './styles/carrers.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider> 
            <App />
        </AuthProvider>
    </BrowserRouter>
)
