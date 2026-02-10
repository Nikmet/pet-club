import { useServicesCatalog } from "@/widgets/services/model/useServicesCatalog";
import { ServicesTabs } from "./ServicesTabs";
import { ServicesSearch } from "./ServicesSearch";
import { ServicesPriceTable } from "./ServicesPriceTable";
import { ServicesPriceCards } from "./ServicesPriceCards";
import { ServicesSearchResults } from "./ServicesSearchResults";
import styles from "./ServicesSection.module.scss";

export const ServicesSection = () => {
    const { tabs, activeTabId, activeCategory, onChangeTab, query, setQuery, isSearching, results } =
        useServicesCatalog();

    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <header className={styles.head}>
                    <h2>УСЛУГИ</h2>
                    <p className={styles.sectionLabel}>{activeCategory.sectionLabel}</p>
                    <p className={styles.subTitle}>{activeCategory.subtitle}</p>
                </header>

                <ServicesTabs tabs={tabs} activeTabId={activeTabId} onChangeTab={onChangeTab} />
                <ServicesSearch value={query} onChange={setQuery} />

                <div className={styles.content}>
                    {isSearching ? (
                        <ServicesSearchResults query={query} results={results} />
                    ) : (
                        <>
                            <ServicesPriceTable category={activeCategory} />
                            <ServicesPriceCards category={activeCategory} />
                            <div className={styles.notes}>
                                {activeCategory.notes?.map(note => (
                                    <p key={note}>{note}</p>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <a className={styles.priceLink} href="#booking" el="noreferrer">
                    Записать своего питомца
                </a>
            </div>
        </section>
    );
};
