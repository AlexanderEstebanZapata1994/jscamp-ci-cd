import { useState } from "react";
import jobsData from '../data/jobs.json';

const ITEMS_PER_PAGE = 6; 
export const useFilters = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [textToFilter, setTextToFilter] = useState('');
  const [location, setLocation] = useState('');
  const [technology, setTechnology] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState('');

  
  const handlePageChange = (page) => {
      setCurrentPage(page)
  }

  const handleFiltersChange = (filters) => {
      setTextToFilter(filters.textToFilter)
      setLocation(filters.location)
      setTechnology(filters.technology)
      setExperienceLevel(filters.experienceLevel)
  }

  const jobsFilteredWithText = jobsData.filter(job => (textToFilter === '' || job.title.toLowerCase().includes(textToFilter.toLowerCase())))

  const jobsDataWithAllFilters = jobsFilteredWithText.filter(job => 
          (location           === '' || job.data.location.toLowerCase().includes(location.toLowerCase()))
      &&  (technology         === '' || job.data.technologies.some(tech => tech.toLowerCase().includes(technology))) 
      &&  (experienceLevel    === '' || job.data.level.toLowerCase().includes(experienceLevel.toLowerCase())))

  const totalPages = Math.ceil(jobsDataWithAllFilters.length / ITEMS_PER_PAGE)
  const jobsPaginated = jobsDataWithAllFilters.slice(
          (currentPage - 1) * ITEMS_PER_PAGE, 
          currentPage * ITEMS_PER_PAGE
  )

  return {
      handlePageChange,
      handleFiltersChange,
      jobsPaginated,
      jobsDataWithAllFilters,
      totalPages,
      currentPage
  }
}