import { Button } from '../../../components/Button/Button.jsx';
import styles from './AIJobSummary.module.css';
import { DetailsSection } from '../DetailsSection.jsx';
import { useAiSummary } from '../../../hooks/useAiSummary.jsx';

export default function AIJobSummary ({ jobId }) {
    
    const { summary, loading, error, generateSummary } = useAiSummary(jobId);

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
