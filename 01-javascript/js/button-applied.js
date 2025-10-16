const jobListings = document.querySelector('.job-listings');

jobListings.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("button-apply-job")) {
        element.textContent = "Applied";
        element.classList.add("is-applied");
        element.disabled = true;
    }
})