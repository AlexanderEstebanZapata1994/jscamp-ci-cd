import { Link } from '../../components/Link/Link.jsx'
import styles from './404.module.css'
import notFoundImage from '../../assets/img/404.png'

export const NotFoundPage = () => {
    return (
        <main className={styles.main}>
            <img src={notFoundImage} alt="404 - Page Not Found" />
            <h1>Oops! Page not found</h1>
            <h2>We can't find the resource you're looking for</h2>
            <Link className={styles.link} href="/">Go to Home</Link>
        </main>
    )
}