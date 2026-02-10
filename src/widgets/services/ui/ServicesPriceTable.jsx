import styles from "./ServicesPriceTable.module.scss";

export const ServicesPriceTable = ({ category }) => {
  if (!category) return null;

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Порода / процедура</th>
            {category.columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {category.rows.map((row) => (
            <tr key={row.id} className={row.highlight ? styles.highlight : ""}>
              <td>{row.name}</td>
              {category.columns.map((column) => {
                const value = row.prices?.[column.id];
                return (
                  <td key={`${row.id}-${column.id}`} className={value ? "" : styles.muted}>
                    {value ?? "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
