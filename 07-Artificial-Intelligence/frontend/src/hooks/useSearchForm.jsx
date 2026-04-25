import { useRef } from "react";
import { SEARCH_DEBOUNCE_TIME } from "../constants.js";

export const useSearchForm = ({idText, idTechnology, idLocation, idExperienceLevel, onFiltersChange}) => {

    const timeoutIdRef = useRef(0); //Explain why we use useRef here
    // useRef is used to store the timeout id so that we can clear it later
    // if the user types quickly, we don't want to make multiple requests
    // so we use useRef to store the timeout id and clear it later
    // this is a common pattern in React to avoid making multiple requests
    // when the user types quickly
    // this is a common pattern in React to avoid making multiple requests

    const handleSubmitChange = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const filters = {
            textToFilter: formData.get(idText),
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
        }
        if (event.target.id === idText) {
            onTextChange(filters);
        } else {
            onFiltersChange(filters);
        }
    }

    const handleClearFilters = (event) => {
        event.preventDefault();
        const filters = {
            textToFilter: '',
            technology: '',
            location: '',
            experienceLevel: '',
        }
        onFiltersChange(filters)
    }

    const onTextChange = (filters) => {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(() => {
            onFiltersChange(filters)
        }, SEARCH_DEBOUNCE_TIME);
    }
    return {
        handleSubmitChange,
        handleClearFilters,
    }
}