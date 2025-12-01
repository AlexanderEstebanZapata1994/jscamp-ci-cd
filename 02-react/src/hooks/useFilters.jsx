import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.jsx";


const ITEMS_PER_PAGE = 4; 
export const useFilters = () => {
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
    const [textToFilter, setTextToFilter] = useLocalStorage('textToFilter', '');
    const [location, setLocation] = useLocalStorage('location', '');
    const [technology, setTechnology] = useLocalStorage('technology', ['']);
    const [experienceLevel, setExperienceLevel] = useLocalStorage('experienceLevel', '');

    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);

                const offset = (currentPage - 1) * ITEMS_PER_PAGE;
                const limit = ITEMS_PER_PAGE;

                const queryparams = new URLSearchParams({ offset, limit });
                if (textToFilter) queryparams.set('text', textToFilter)
                if (location) queryparams.set('type', location)
                if (technology) queryparams.set('technology', technology)
                if (experienceLevel) queryparams.set('level', experienceLevel)

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryparams.toString()}`)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const { data, total } = await response.json()
                setJobs(data)
                setTotal(total)
                setError(null)
            } catch (error) {
                console.error('Error fetching jobs:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, [currentPage, textToFilter, location, technology, experienceLevel])

    useEffect(() => {
        setCurrentPage(1)
    }, [textToFilter, location, technology, experienceLevel])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (filters) => {
        setTextToFilter(filters.textToFilter)
        setLocation(filters.location)
        setTechnology(filters.technology.join())
        setExperienceLevel(filters.experienceLevel)
    }

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

    return {
        textToFilter,
        setTextToFilter,
        location,
        setLocation,
        technology,
        setTechnology,
        experienceLevel,
        setExperienceLevel,
        loading,
        error,
        jobs,
        total,
        totalPages,
        currentPage,
        handlePageChange,
        handleFiltersChange
    }
}