import { reviewsData } from "@/entities/review/model/reviewsData";
import styles from "./ReviewsSection.module.scss";

export const ReviewsSection = () => {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <header className={styles.head}>
          <div>
            <p>ОТЗЫВЫ</p>
            <h2>Впечатления гостей</h2>
          </div>
          <div className={styles.controls} aria-hidden="true">
            <button type="button">←</button>
            <button type="button">→</button>
          </div>
        </header>

        <div className={styles.list}>
          {reviewsData.map((review) => (
            <article key={review.author} className={styles.card}>
              <span className={styles.stars}>☆ ☆ ☆ ☆ ☆</span>
              <p className={styles.text}>«{review.text}»</p>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.date}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
