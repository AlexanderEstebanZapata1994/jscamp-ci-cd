const techSelect = document.querySelector("#filter-technology");
const locationSelect = document.querySelector("#filter-location");
const experienceSelect = document.querySelector("#filter-experience-level");

techSelect.addEventListener("change", (event) => {
    console.log(event.target.value);
});

locationSelect.addEventListener("change", (event) => {
    const jobs = document.querySelectorAll(".job-card");
    const locationSelected = event.target.value;

    jobs.forEach((job) => {
      const currentJobLocation = job.dataset.location;
      const isShown =
        locationSelected === currentJobLocation || locationSelected === "";
      job.classList.toggle("is-hidden", !isShown);
    });
});

const searchForm = document.querySelector("#form-search");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.value);
});
