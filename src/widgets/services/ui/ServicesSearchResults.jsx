import styles from "./ServicesSearchResults.module.scss";

export const ServicesSearchResults = ({ query, results }) => {
  if (results.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>Ничего не найдено</h3>
        <p>Попробуйте изменить запрос «{query.trim()}» или выбрать другую формулировку породы/процедуры.</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {results.map((item) => (
        <article key={item.id} className={`${styles.item} ${item.highlight ? styles.highlight : ""}`.trim()}>
          <div className={styles.top}>
            <h3>{item.name}</h3>
            <span>{item.categoryLabel}</span>
          </div>
          <div className={styles.prices}>
            {item.priceEntries.map((entry) => (
              <div key={`${item.id}-${entry.id}`}>
                <small>{entry.label}</small>
                <strong>{entry.value}</strong>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
