import { useState } from 'react';
import { Button } from '../../../components/Button/Button.jsx';
import Spinner from '../../../components/Spinner';
import styles from './AIJobSummary.module.css';
import { DetailsSection } from '../DetailsSection.jsx';

const API_URL = import.meta.env.VITE_API_URL;


export default function AIJobSummary ({ jobId }) {
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateSummary = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`${API_URL}/ai/summary/${jobId}`)

            if (!response.ok) {
                throw new Error("Error fetching summary.")
            }

            const data = await response.json();
            setSummary(data.summary)
        } catch (error) {
            setError(error.message)
            setSummary(null)
        } finally {
            setLoading(false)
        }
    }

    if (summary) {
        return (
            <DetailsSection title="✨ AI Summary" description={summary} formatContent={true} justifyText="justify"/>
        )
    }

    return (
        <Button
            onClick={generateSummary}
            disabled={loading}
            type="transparent"
            icon="lightbulb"
            className={styles.summaryButton}
            style={{ width: '30%' }}
        >
            {
            loading 
                ? "Generating Summary..."
                : error ? (
                    {error}
                ) : summary ? (
                    {summary}
                ) : (
                    "✨ Generate AI Summary"
                )
            }
        </Button>
    )
}
