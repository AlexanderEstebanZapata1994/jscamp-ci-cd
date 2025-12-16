import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router";

import { 
    PARAMETERS, 
    ITEMS_PER_PAGE, 
    API_URL,
    DEFAULT_PAGE
} from "../constants.js";

export const useFilters = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [currentPage, setCurrentPage] = useState(() => {
        const page = Number(searchParams.get(PARAMETERS.page) || DEFAULT_PAGE);
        return Number.isNaN(page) ? page : DEFAULT_PAGE;
    });

    const [textToFilter, setTextToFilter] = useState(() => searchParams.get(PARAMETERS.textToFilter) || '');
    const [location, setLocation] = useState(() => searchParams.get(PARAMETERS.location) || '');
    const [technology, setTechnology] = useState(() => searchParams.get(PARAMETERS.technology) || '');
    const [experienceLevel, setExperienceLevel] = useState(() => searchParams.get(PARAMETERS.experienceLevel) || '');

    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const setOrRemoveQueryParams = useCallback((key, value, searchParams) => {
        if (value) searchParams.set(key, value)
        else searchParams.delete(key)
    }, [])

    const setSearchingParamsToUrl = useCallback((filters) => {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            setOrRemoveQueryParams(PARAMETERS.textToFilter, filters.textToFilter, newParams)
            setOrRemoveQueryParams(PARAMETERS.location, filters.location, newParams)
            setOrRemoveQueryParams(PARAMETERS.technology, filters.technology, newParams)
            setOrRemoveQueryParams(PARAMETERS.experienceLevel, filters.experienceLevel, newParams)

            return newParams
        })
    }, [setOrRemoveQueryParams, setSearchParams])

    
    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);

                const offset = (currentPage - 1) * ITEMS_PER_PAGE;
                const limit = ITEMS_PER_PAGE;

                const urlString = `${API_URL}?${PARAMETERS.offset}=${offset}&${PARAMETERS.limit}=${limit}&${searchParams.toString()}`;
                const response = await fetch(urlString)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const { data, total } = await response.json()
                setJobs(data)
                setTotal(total)
                setError(null)
            } catch (error) {
                console.error('Error fetching jobs:', error)
                setError(`Error found: ${error.message}. Try again later.`)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, [currentPage, searchParams, setSearchingParamsToUrl])

    useEffect(() => {
        setCurrentPage(1)
    }, [textToFilter, location, technology, experienceLevel, setCurrentPage])


    useEffect(() => {
    }, [textToFilter, location, technology, experienceLevel, setSearchingParamsToUrl]);
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    
    const handleFiltersChange = (filters) => {
        setTextToFilter(filters.textToFilter)
        setLocation(filters.location)
        setTechnology(filters.technology)
        setExperienceLevel(filters.experienceLevel)
        setSearchingParamsToUrl(filters)
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