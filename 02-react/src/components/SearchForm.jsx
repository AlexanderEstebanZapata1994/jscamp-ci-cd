export function SearchForm({onSearchChange, onLocationChange, onTechnologyChange, onExperienceLevelChange}) {

    const handleSearchKeyDown = (event) => {
        event.preventDefault();
        onSearchChange(event.target.value)
    }
    return (
        <form id="form-search" role="search">
            <div className="search-bar">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  strokeWidth="1.25"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                <input id="search-input" type="search" placeholder="Search for either a job, companies or skills" onChange={handleSearchKeyDown} />
            </div>
            <div className="search-filters">
                {/* TODO: add filtering by multiple technologies here */}
                <select name="technology" id="filter-technology" onChange={(e) => onTechnologyChange(e.target.value)}>
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

                <select name="location" id="filter-location" onChange={(e) => onLocationChange(e.target.value)}>
                    <option value="">Location</option>
                    <option value="remote">Remote</option>
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

                <select name="experience-level" id="filter-experience-level" onChange={(e) => onExperienceLevelChange(e.target.value)}>
                    <option value="">Experience Level</option>
                    <option value="junior">Junior</option>
                    <option value="mid">Mid-level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
            </div>
        </form>
    );
}