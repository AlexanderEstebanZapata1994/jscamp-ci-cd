import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 4; 
export const useFilters = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [textToFilter, setTextToFilter] = useState('');
    const [location, setLocation] = useState('');
    const [technology, setTechnology] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState('');

    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?offset=0&limit=${ITEMS_PER_PAGE}`)
                const { data, total } = await response.json()
                setJobs(data)
                setTotal(total)
            } catch (error) {
                console.error('Error fetching jobs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, [])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (filters) => {
        setTextToFilter(filters.textToFilter)
        setLocation(filters.location)
        setTechnology(filters.technology)
        setExperienceLevel(filters.experienceLevel)
    }

    const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE)

    return {
        loading,
        jobs,
        total,
        totalPages,
        currentPage,
        handlePageChange,
        handleFiltersChange
    }
}