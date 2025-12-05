import styles from "./Spinner.module.css";

export default function Spinner({text, width, height, animationDuration, borderWidth}) {
    return (
        <section className={styles.fullScreen}>
            <div className={styles.spinner}>
                <div 
                    className={styles.spinnerInner} 
                    style={
                        {
                            '--width': width, 
                            '--height': height, 
                            '--animation-duration': animationDuration, 
                            '--border-width': borderWidth
                        }}>
                    <span className={styles.spinnerText}>{text}</span>
                </div>
            </div>
        </section>
    )
}