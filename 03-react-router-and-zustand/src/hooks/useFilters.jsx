import { useState, useEffect, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage.jsx";
import { useRouter } from "./useRouter.jsx";
import { 
    PARAMETERS, 
    ITEMS_PER_PAGE, 
    API_URL,
    DEFAULT_PAGE,
    LOCAL_STORAGE_KEYS
} from "../constants.js";

export const useFilters = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [currentPage, setCurrentPage] = useLocalStorage(LOCAL_STORAGE_KEYS.currentPage, () => {
        return parseInt(urlParams.get(PARAMETERS.page) || DEFAULT_PAGE, 10);
    });
    const [textToFilter, setTextToFilter] = useLocalStorage(LOCAL_STORAGE_KEYS.textToFilter, () => {
        return urlParams.get(PARAMETERS.textToFilter) || '';
    });
    const [location, setLocation] = useLocalStorage(LOCAL_STORAGE_KEYS.location, () => {
        return urlParams.get(PARAMETERS.location) || '';
    });
    const [technology, setTechnology] = useLocalStorage(LOCAL_STORAGE_KEYS.technology, () => {
        return urlParams.get(PARAMETERS.technology) || '';
    });
    const [experienceLevel, setExperienceLevel] = useLocalStorage(LOCAL_STORAGE_KEYS.experienceLevel, () => {
        return urlParams.get(PARAMETERS.experienceLevel) || '';
    });

    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { currentPath, navigateTo } = useRouter()
    
    const setOrRemoveQueryParams = useCallback((key, value, urlParams) => {
        if (value) urlParams.set(key, value)
        else urlParams.delete(key)
    }, [])

    const getQueryParamsString = useCallback((urlParams, filters) => {

        setOrRemoveQueryParams(PARAMETERS.textToFilter, filters.textToFilter, urlParams)
        setOrRemoveQueryParams(PARAMETERS.location, filters.location, urlParams)
        setOrRemoveQueryParams(PARAMETERS.technology, filters.technology, urlParams)
        setOrRemoveQueryParams(PARAMETERS.experienceLevel, filters.experienceLevel, urlParams)

        return urlParams.toString()
    }, [setOrRemoveQueryParams])

    
    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);

                const offset = (currentPage - 1) * ITEMS_PER_PAGE;
                const limit = ITEMS_PER_PAGE;

                const queryParamsString = getQueryParamsString(new URLSearchParams({offset: offset, limit: limit}), { textToFilter, location, technology, experienceLevel })
                const response = await fetch(`${API_URL}?${queryParamsString}`)

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
    }, [currentPage, textToFilter, location, technology, experienceLevel, getQueryParamsString])

    useEffect(() => {
        setCurrentPage(1)
    }, [textToFilter, location, technology, experienceLevel, setCurrentPage])


    useEffect(() => {
        const queryParamsString = getQueryParamsString(new URLSearchParams(window.location.search), {textToFilter, location, technology, experienceLevel})
        
        const basePath = currentPath;
        const newUrl = queryParamsString ? `${basePath}?${queryParamsString}` : basePath;
        navigateTo(newUrl);

    }, [textToFilter, location, technology, experienceLevel, currentPage, currentPath, navigateTo, getQueryParamsString]);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleFiltersChange = (filters) => {
        setTextToFilter(filters.textToFilter)
        setLocation(filters.location)
        setTechnology(filters.technology)
        setExperienceLevel(filters.experienceLevel)

        const queryParamsString = getQueryParamsString(new URLSearchParams(window.location.search), filters)
        navigateTo(`${currentPath}?${queryParamsString}`)
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