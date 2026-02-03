export const filterJobs = (jobs, title, text, technology, location, level) => {
    let jobsFiltered = jobs;

    if (title) {
        jobsFiltered = jobsFiltered.filter((job) => {
            return job.title.toLowerCase().includes(title.toLowerCase())
        })
    }

    if (text) {
        jobsFiltered = jobsFiltered.filter((job) => {
            const searchValue = text.toLocaleLowerCase().trim();
            return job.title.toLowerCase().includes(searchValue) 
                || job.description.toLowerCase().includes(searchValue)
        })
    }

    if (technology) {
        jobsFiltered = jobsFiltered.filter((job) => {
            return job.data.technologies.includes(technology)
        })
    }

    if (location) {
        jobsFiltered = jobsFiltered.filter((job) => {
            return job.data.location.toLowerCase().includes(location.toLowerCase())
        })
    }

    if (level) {
        jobsFiltered = jobsFiltered.filter((job) => {
            return job.data.level.toLowerCase().includes(level.toLowerCase())
        })
    }

    return jobsFiltered;
}

export const createJob = (jobs, job) => {
    jobs.push(job)
    return jobs
}

export const updateJob = (jobs, { id, title }) => {
    const index = jobs.findIndex(job => job.id === id)
    if (index === -1) {
        throw new Error('Job not found')
    }
    jobs[index] = { ...jobs[index], title };
    return jobs[index]
}

export const deleteJob = (jobs, id) => {
    const index = jobs.findIndex(job => job.id === id);

    if (index === -1) {
        throw new Error('Job not found')
    }

    jobs.splice(index, 1);
}