import styles from './Details.module.css';
import snarkdown from 'snarkdown';

export const DetailsSection = ({title, description, formatContent, justifyText = 'left'}) => {

  const descriptionHtml = snarkdown(description);
  
    return (
      <section className={styles.jobDetailsSection}>
        <h2>{title}</h2>  
        {formatContent ? <p style={{ textAlign: justifyText }} dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> : <p style={{ textAlign: justifyText }}>{description}</p>}
      </section>
    )
}