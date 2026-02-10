import styles from "./ServicesTabs.module.scss";

export const ServicesTabs = ({ tabs, activeTabId, onChangeTab }) => {
  return (
    <div className={styles.root} role="tablist" aria-label="Категории услуг">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeTabId}
          className={`${styles.tab} ${tab.id === activeTabId ? styles.active : ""}`.trim()}
          onClick={() => onChangeTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
