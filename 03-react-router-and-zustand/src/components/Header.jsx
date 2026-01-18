import { Link } from './Link/Link.jsx'
import { NavLink } from 'react-router'
import { useAuthStore } from '../store/useAuthStore.jsx';
import { useFavoritesStore } from '../store/useFavoritesStore.jsx';

export function Header() {

    const { isLoggedIn, login, logout } = useAuthStore()

    const { countFavorites, clearFavorites } = useFavoritesStore()

    const numberOfFavorites = countFavorites()

    const handleLogout = () => {
        logout()
        clearFavorites()
    }

    return (
        <header>
            <Link href="/" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline></svg>
                <h1 style={{color: 'var(--text-primary)',}}>
                    DevJobs
                </h1>
            </Link>

            <div>
                <NavLink to="/search" className={({isActive}) => isActive ? 'nav-link-active' : ''}>Jobs</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link-active' : ''}>Contact</NavLink>
                {
                    isLoggedIn && (
                        <NavLink to="/profile" className={({isActive}) => isActive ? 'nav-link-active' : ''}>Profile (❤️{numberOfFavorites})</NavLink>
                    )
                }
            {
                isLoggedIn 
                ? <button onClick={handleLogout}>Logout</button>
                : <button onClick={login}>Login</button>
            }
            </div>
        </header>
    )
}