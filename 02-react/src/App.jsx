function App() {
  return (
    <>
      <header>
        <div>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline></svg>
            <h1>DevJobs</h1>
        </div>
        <nav>
            <a href="./index.html">Inicio</a>
            <a href="./carrers.html" style="color: var(--primary-light);">Empleos</a>
        </nav>

        <div>
            <a href="">Upload your CV</a>
            <avatar-profile service="github" username="AlexanderEstebanZapata1994" size="32"></avatar-profile>
        </div>
    </header>
    <main>
        <section class="jobs-search">
            <h1>Find your Next Job</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <form id="form-search" role="search">
                <div class="search-bar">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="gray"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <input id="search-input" type="search" placeholder="Search for either a job, companies or skills" />
                </div>
                <div class="search-filters">
                    {/* TODO: add filtering by multiple technologies here */}
                    <select name="technology" id="filter-technology">
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
        
                    <select name="location" id="filter-location">
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
        
                    <select name="experience-level" id="filter-experience-level">
                        <option value="">Experience Level</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>
                </div>
            </form>
        </section>
        <section class="job-listings">
            <h2>Results of the search</h2>
            <div class="job-cards">
            </div>
            
            {/* TODO: add pagination here */}
            <nav class="pagination">
                <a href="#">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </a>
                <a class="is-active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </a>
            </nav>
        </section>
    </main>
    <footer>
        <small>&copy; 2025 DevJobs. Todos los derechos reservados.</small>
    </footer>
    </>
  )
}

export default App
