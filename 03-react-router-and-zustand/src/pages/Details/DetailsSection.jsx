import styles from './Details.module.css';
import snarkdown from 'snarkdown';

export const DetailsSection = ({title, description, formatContent}) => {

  const descriptionHtml = snarkdown(description);
  
    return (
      <section className={styles.jobDetailsSection}>
        <h2>{title}</h2>  
        {formatContent ? <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> : <p>{description}</p>}
      </section>
    )
}