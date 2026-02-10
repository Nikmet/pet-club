import styles from "./ServicesPriceCards.module.scss";

export const ServicesPriceCards = ({ category }) => {
  if (!category) return null;

  return (
    <div className={styles.cards}>
      {category.rows.map((row) => (
        <article key={row.id} className={`${styles.card} ${row.highlight ? styles.highlight : ""}`.trim()}>
          <h3>{row.name}</h3>
          <div className={styles.priceList}>
            {category.columns.map((column) => (
              <div key={`${row.id}-${column.id}`} className={styles.priceRow}>
                <span>{column.label}</span>
                <strong>{row.prices?.[column.id] ?? "-"}</strong>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
