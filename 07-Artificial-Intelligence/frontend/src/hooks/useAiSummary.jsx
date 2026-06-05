import { useState} from 'react';
const API_URL = import.meta.env.VITE_API_URL;

export function useAiSummary(jobId) {
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateSummary = async () => {
        setLoading(true)
        setError(null)
        setSummary(''); // Reset the summary to an empty string

        try {
            const response = await fetch(`${API_URL}/ai/summary/${jobId}`)

            if (!response.ok) {
                throw new Error("Error fetching summary.")
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            // This loop reads the response chunk by chunk and sets the summary as it is received
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunkText = decoder.decode(value, { stream: true });
                setSummary(previousValue => previousValue ? previousValue + chunkText : chunkText);
            }

        } catch (error) {
            setError(error.message)
            setSummary(null)
        } finally {
            setLoading(false)
        }
    }
        
    return { summary, loading, error, generateSummary}
}