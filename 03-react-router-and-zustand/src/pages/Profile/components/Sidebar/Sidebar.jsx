import { Link } from '../../../../components/Link/Link.jsx';
import { useAuthStore } from '../../../../store/useAuthStore.jsx';
import styles from './Sidebar.module.css';

export default function Sidebar() {

    const { user: { name, email, avatar } } = useAuthStore()
    return (
        <aside>
            <section>
                {/* <img src={user.avatar} alt={`Avatar de ${user.name}`} /> */}
                <h2>{name}</h2>
                <span>{email}</span>
            </section>

            <nav>
                <Link href="/" icon="home">Home</Link>
                <Link href="/profile" icon="person">My profile</Link>
                <Link href="/profile/favorites" icon="favorite">My favorites</Link>
                <Link href="/profile/settings" icon="settings">Settings</Link>
            </nav>
        </aside>
    )
}