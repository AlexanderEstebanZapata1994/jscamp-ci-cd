const techSelect = document.querySelector("#filter-technology");
const locationSelect = document.querySelector("#filter-location");
const experienceSelect = document.querySelector("#filter-experience-level");
const searchForm = document.querySelector("#form-search");

techSelect.addEventListener("change", () => {
  filterData();
});

locationSelect.addEventListener("change", () => {
  filterData();
});

experienceSelect.addEventListener("change", () => {
  filterData();
});

const filterData = () => {
  const {
    searchValue,
    technologySelected,
    locationSelected,
    experienceSelected,
  } = getDataFromUI();
  filteringData(
    searchValue,
    technologySelected,
    locationSelected,
    experienceSelected
  );
};

const filteringData = (searchValue, technology, location, experience) => {
  const jobs = document.querySelectorAll(".job-card");
  jobs.forEach((job) => {
    const currentJobTitle = job.dataset.title;
    const currentJobTechnology = job.dataset.technology;
    const currentJobLocation = job.dataset.location;
    const currentJobExperience = job.dataset.level;
    const isShown =
      (searchValue === "" ||
        currentJobTitle.toLowerCase().includes(searchValue.toLowerCase())) &&
      (technology === "" ||
        currentJobTechnology
          .toLowerCase()
          .includes(technology.toLowerCase())) &&
      (location === "" ||
        currentJobLocation.toLowerCase().includes(location.toLowerCase())) &&
      (experience === "" ||
        currentJobExperience.toLowerCase().includes(experience.toLowerCase()));
    job.classList.toggle("is-hidden", !isShown);
  });
};

const getDataFromUI = () => {
  const searchValue = document.querySelector("#search-input").value;
  const technologySelected = document.querySelector("#filter-technology").value;
  const locationSelected = document.querySelector("#filter-location").value;
  const experienceSelected = document.querySelector(
    "#filter-experience-level"
  ).value;
  return {
    searchValue,
    technologySelected,
    locationSelected,
    experienceSelected,
  };
};
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    searchValue,
    technologySelected,
    locationSelected,
    experienceSelected,
  } = getDataFromUI();
  filteringData(
    searchValue,
    technologySelected,
    locationSelected,
    experienceSelected
  );
});

