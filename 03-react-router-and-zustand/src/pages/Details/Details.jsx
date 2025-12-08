import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../constants';
import Spinner from '../../components/Spinner';
import { Link } from '../../components/Link/Link.jsx';

export const JobDetails = () => {
    const { id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <Spinner message="Loading job details..." animationDuration=".5s" borderWidth="5px" height="200px" width="200px" />
    if (error) return <p>{error}</p>
    if (!job) return <p>Job not found</p>
    return (
        <div>
            <Link to="/search"><p>Empleos</p></Link>
            <article>
                <h1>{job.titulo}</h1>
                <p>{job.descripcion}</p>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.tecnologias}</p>
                <p>{job.content.responsabilities}</p>
            </article>
        </div>
    )
}