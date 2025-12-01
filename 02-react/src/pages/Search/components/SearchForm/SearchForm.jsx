import { useId } from "react";
import { useSearchForm } from "../../../../hooks/useSearchForm.jsx";
import { useFilters } from "../../../../hooks/useFilters.jsx";
import styles from "./SearchForm.module.css";

export function SearchForm({onFiltersChange}) {
    const idText = useId();
    const idTechnology = useId();
    const idLocation = useId();
    const idExperienceLevel = useId();

    const { textToFilter, setTextToFilter, technology, setTechnology, location, setLocation, experienceLevel, setExperienceLevel } = useFilters();

    const { handleSubmitChange, handleClearFilters } = useSearchForm({idText, idTechnology, idLocation, idExperienceLevel, onFiltersChange})

    const handleFocusIn = () => {
        const searchIcon = document.getElementById("search-icon");

        searchIcon.style.transform = "scale(1.2)";
        searchIcon.style.transition = "scale 0.5s ease-in-out";
        searchIcon.style.stroke = "#09f";
    }

    const handleFocusOut = () => {
        const searchIcon = document.getElementById("search-icon");

        searchIcon.style.transform = "scale(1)";
        searchIcon.style.transition = "scale 0.5s ease-in-out";
        searchIcon.style.stroke = "gray";

    }

    const handleClearFiltersInput = (event) => {
        event.preventDefault();
        setTextToFilter('');
        setTechnology(['']);
        setLocation('');
        setExperienceLevel('');
        handleClearFilters(event);
    }

    const isAnyFilterApplied = () => (textToFilter !== '' || technology["0"] !== '' || location !== '' || experienceLevel !== '');

    return (
        <form onChange={handleSubmitChange} id="form-search" role="search">
            <div className={styles.searchBar}>
                <svg id="search-icon"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  strokeWidth="1.25"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                <input 
                    name={idText}
                    type="search"
                    value={textToFilter}
                    onChange={(event) => setTextToFilter(event.target.value)}
                    placeholder="Search for either a job, companies or skills"
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                />
            </div>
            <div className={styles.searchFilters}>
                <select 
                    name={idTechnology} 
                    id={"filter-technology"} 
                    value={technology[0]} 
                    onChange={(event) => setTechnology([event.target.value])}
                >
                    <option value="">Technologies</option>
                    <optgroup label="Popular Technologies">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="nodejs">Node.js</option>
                    </optgroup>
                    <option value="java">Java</option>
                    <hr />
                    <option value="csharp">C#</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="swift">Swift</option>
                    <hr />
                    <option value="golang">Golang</option>
                    <option value="rust">Rust</option>
                </select>

                <select 
                    name={idLocation} 
                    id={"filter-location"} 
                    value={location} 
                    onChange={(event) => setLocation(event.target.value)}
                >
                    <option value="">Location</option>
                    <option value="remoto">Remote</option>
                    <option value="cdmx">Mexico City</option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="guadalajara">Guadalajara</option>
                    <option value="bogota">Bogotá</option>
                    <option value="lima">Lima</option>
                    <option value="madrid">Madrid</option>
                    <option value="valencia">Valencia</option>
                    <option value="monterrey">Monterrey</option>
                    <option value="santiago">Santiago de Chile</option>
                </select>

                <select 
                    name={idExperienceLevel} 
                    id={"filter-experience-level"} 
                    value={experienceLevel} 
                    onChange={(event) => setExperienceLevel(event.target.value)}
                >
                    <option value="">Experience Level</option>
                    <option value="junior">Junior</option>
                    <option value="mid">Mid-level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
                {isAnyFilterApplied() && 
                    <button 
                        className={styles.clearFiltersButton} 
                        type="button"
                        aria-label="Clear Filters"
                        title="Clear Filters"
                        onClick={handleClearFiltersInput}
                    >Clear Filters
                    </button> 
                }
            </div>
        </form>
    );
}