export const useSearchForm = ({idText, idTechnology, idLocation, idExperienceLevel, onFiltersChange}) => {

    const handleSubmitChange = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const filters = {
            textToFilter: formData.get(idText),
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
        }

        onFiltersChange(filters)
    }

    return {
        handleSubmitChange
    }
}