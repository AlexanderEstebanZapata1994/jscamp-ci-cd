const jobListings = document.querySelector('.job-listings');

jobListings.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("button-apply-job")) {
        element.textContent = "Applied";
        element.classList.add("is-applied");
        element.disabled = true;
    }
})

const techSelect = document.querySelector("#filter-technology");
const locationSelect = document.querySelector("#location");
const experienceSelect = document.querySelector("#experience-level");

techSelect.addEventListener("change", (event) => {
    console.log(event.target.value);
})

locationSelect.addEventListener("change", (event) => {
    console.log(event.target.value);

    const jobs = document.querySelectorAll(".job-card");

    if (event.target.value === "") {
        jobs.forEach(job => {
            job.style.display = "block";
        })
        return;
    }
    debugger;
    jobs.forEach(job => {
        if (job.querySelector("small").textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    })
})
