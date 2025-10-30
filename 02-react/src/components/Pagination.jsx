import styles from './Pagination.module.css';

export function Pagination({ currentPage = 1, totalPages = 5, onPageChange}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const prevPageStyle = isFirstPage ? { pointerEvents: 'none', opacity: 0.5} : {}; 
  const nextPageStyle = isLastPage ? { pointerEvents: 'none', opacity: 0.5} : {};

  const handlePrevPage = () => {
    if (isFirstPage) return;
    onPageChange(currentPage - 1);
  }

  const handleNextPage = () => {
    if (isLastPage) return;
    onPageChange(currentPage + 1)
  }

  const handlePageClick = (page) => {
    if (page === currentPage) return;
    onPageChange(page)
  }
  
  return (
    <nav className={styles.pagination}>
      <a className={styles.paginationLink} style={prevPageStyle} onClick={handlePrevPage}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
      </a>
      {
        pages.map(page => {
          return (<a key={page} className={`${styles.paginationLink} ${page === currentPage ? styles.isActive : null}`} onClick={() => handlePageClick(page)}>{page}</a>)
        })
      }
      <a className={styles.paginationLink} style={nextPageStyle} onClick={handleNextPage}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
      </a>
    </nav>
  )
}