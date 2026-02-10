import styles from "./SectionHead.module.scss";

export const SectionHead = ({ eyebrow, title, note, className = "" }) => {
    return (
        <header className={`${styles.head} ${className}`.trim()}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2>{title}</h2>
            {note ? <p className={styles.note}>{note}</p> : null}
        </header>
    );
};
