import { Link } from './Link/Link.jsx'
import { useState } from 'react';
import { NavLink } from 'react-router'
import { useAuthStore } from '../store/useAuthStore.jsx';
import { useFavoritesStore } from '../store/useFavoritesStore.jsx';
import { Button } from './Button/Button.jsx';
import styles from './Header.module.css';

export function Header() {

    const { isLoggedIn, login, logout } = useAuthStore()
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const { countFavorites, clearFavorites } = useFavoritesStore()

    const numberOfFavorites = countFavorites()

    const handleLogout = () => {
        logout()
        clearFavorites()
    }

    const handleToggleSideBar = () => {
        setIsSideBarOpen((prev) => !prev)
    }

    return (
        <header>
            <NavLink to="/" className={styles.logo}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline></svg>
                <h1>
                    DevJobs
                </h1>
            </NavLink>

            <div>
                <Link href="/search" icon="work">Jobs</Link>
                <Link href="/contact" icon="contact_mail">Contact</Link>
                {
                    isLoggedIn && (
                        <NavLink to="/profile" className={({isActive}) => isActive ? styles.navLinkActive : ''}>Profile ❤️ ({numberOfFavorites})</NavLink>
                    )
                }
                {
                    isLoggedIn 
                    ? <Button onClick={handleLogout} icon="logout" type="danger">Logout</Button>
                    : <Button onClick={login} icon="login" type="success">Login</Button>
                }
            </div>

            <aside>
                <Button icon="menu" type="transparent" onClick={handleToggleSideBar}></Button>
                <nav className={isSideBarOpen ? styles.open : styles.closed}>
                    <Button icon="close" type="transparent" className={styles.buttonClose} onClick={handleToggleSideBar} title="Close Sidebar"></Button>
                    <Link href="/search" icon="work">Jobs</Link>
                    <Link href="/contact" icon="contact_mail">Contact</Link>
                    {
                        isLoggedIn && (
                            <Link href="/profile" icon="favorite">Profile ❤️ ({numberOfFavorites})</Link>
                        )
                    }
                    {
                        isLoggedIn 
                        ? <Button onClick={handleLogout} icon="logout" type="danger">Logout</Button> 
                        : <Button onClick={login} icon="login" type="success">Login</Button>
                    }
                </nav>
            </aside>
        </header>
    )
}