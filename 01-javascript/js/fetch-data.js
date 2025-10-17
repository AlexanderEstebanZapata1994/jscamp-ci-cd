export function fetchData() {
  fetch("./data/jobs.json")
    .then((response) => response.json())
    .then((jobs) => {
      const jobCards = document.querySelector(".job-cards");
      jobs.forEach((job) => {
        const jobCard = document.createElement("article");
        jobCard.classList.add("job-card");
        jobCard.dataset.level = job.data.level;
        jobCard.dataset.location = job.data.location;
        jobCard.dataset.title = job.title;
        jobCard.dataset.technology = job.data.technologies.join(", ");

        jobCard.innerHTML = `
                    <div>
                        <h3>${job.title}</h3>
                        <small>${job.company} | ${job.location}</small>
                        <p>${job.description}</p>
                    </div>
                    <button class="button-apply-job">Apply Now</button>
                `;
        jobCards.appendChild(jobCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchData();
