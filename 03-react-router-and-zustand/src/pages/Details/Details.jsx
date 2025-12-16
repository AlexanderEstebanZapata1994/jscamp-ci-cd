import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../constants';
import Spinner from '../../components/Spinner';
import { Link } from '../../components/Link/Link.jsx';
import styles from './Details.module.css';
import { DetailsSection } from './DetailsSection.jsx';

export default function JobDetailsPage() {
    const { id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isApplied, setIsApplied] = useState(false);

    const textButton = isApplied ? 'Applied' : 'Apply Now';
    const handleClickApplied = () => {
        setIsApplied(true)
    }

    useEffect(() => {
        async function fetchJob() {
            try {
                setLoading(true)
                const response = await fetch(`${API_URL}/${id}`)
                if (!response.ok) {
                    setError(response.statusText)
                    throw new Error(response.statusText)
                }
                const job = await response.json()
                setJob(job)
                setError(null)
            }
            catch (error) {
                setError(error.message)
                setJob(null)
            }
            finally {
                setLoading(false)
            }
        }
        fetchJob()
    }, [id]);

    useEffect(() => {
        if (job) {
            document.title = `Job Details - ${job.titulo}`
        }
    }, [job]);

    if (loading) return <Spinner text="Loading job details..." animationDuration=".5s" borderWidth="5px" height="200px" width="200px" />
    if (error) return <p>{error}</p>
    if (!job) return <><p>Job not found {id}</p><Link href="/search">Go to Jobs</Link></> // TODO: Make the link to go to the search page
    return (
        <main className={styles.main}>
            <article className={styles.details}>
                <nav role="navigation" className={styles.breadcrumb}>
                    <Link className={styles.breadcrumbLink} href="/search">Jobs</Link>
                    <span>/</span>
                    <p>{job.titulo}</p>
                </nav>
                <section className={styles.jobDetails}>
                    <header className={styles.jobDetailsHeader}>
                        <span>
                            <h1>{job.titulo}</h1>
                            <small><span className={styles.icon}>🏢</span>{job.empresa} | <span className={styles.icon}>📍</span>{job.ubicacion}</small>
                        </span>
                        <button className={`${styles.buttonApplyNow} ${isApplied ? styles.isApplied : ''}`} onClick={handleClickApplied}>{textButton}</button>
                    </header>
                    <DetailsSection title="Job Description" description={job.descripcion} formatContent={false}/>
                    <DetailsSection title="Responsibilities" description={job.content.responsibilities} formatContent={true} />
                    <DetailsSection title="Requirements" description={job.content.requirements} formatContent={true} />
                    <DetailsSection title="About the company" description={job.content.about} formatContent={false} />
                    <button className={`${styles.buttonApplyNow} ${isApplied ? styles.isApplied : ''} ${styles.bottomButton}`} onClick={handleClickApplied}>{textButton}</button>
                </section>
            </article>
        </main>
    )
}