import styles from './Profile.module.css';
import { Link } from '../../components/Link/Link.jsx';
import Sidebar from './components/Sidebar/index.js';

export default function Profile () {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main>
                <h2>Profile</h2>
            </main>
        </div>
    )
}