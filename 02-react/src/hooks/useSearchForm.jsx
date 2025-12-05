import { useRef } from "react";
import { SEARCH_DEBOUNCE_TIME } from "../constants.js";

export const useSearchForm = ({idText, idTechnology, idLocation, idExperienceLevel, onFiltersChange}) => {

    const timeoutIdRef = useRef(0);

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