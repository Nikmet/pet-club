import { Search, X } from "lucide-react";
import styles from "./ServicesSearch.module.scss";

export const ServicesSearch = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      <Search className={styles.icon} size={16} aria-hidden="true" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Поиск по породе или названию процедуры"
        aria-label="Поиск по услугам"
      />
      {value ? (
        <button type="button" className={styles.clear} onClick={() => onChange("")} aria-label="Очистить поиск">
          <X size={14} />
        </button>
      ) : null}
    </div>
  );
};
