import styles from "./ReviewCard.module.scss";

const getInitials = (fullName) => {
  const parts = fullName.split(" ").filter(Boolean);
  if (parts.length === 0) return "PC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
};

export const ReviewCard = ({ review }) => {
  const filledStars = Math.max(0, Math.min(5, review.rating));
  const emptyStars = 5 - filledStars;

  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={`Оценка ${filledStars} из 5`}>
        {Array.from({ length: filledStars }).map((_, index) => (
          <span key={`filled-${review.id}-${index}`} className={styles.starFilled}>
            ★
          </span>
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${review.id}-${index}`} className={styles.starEmpty}>
            ★
          </span>
        ))}
      </div>

      <p className={styles.text}>"{review.text}"</p>

      <footer className={styles.author}>
        {review.avatar ? (
          <img src={review.avatar} alt={review.author} className={styles.avatar} loading="lazy" decoding="async" />
        ) : (
          <div className={styles.avatarFallback} aria-hidden="true">
            {getInitials(review.author)}
          </div>
        )}
        <div>
          <strong>{review.author}</strong>
          <span>{review.date}</span>
        </div>
      </footer>
    </article>
  );
};
