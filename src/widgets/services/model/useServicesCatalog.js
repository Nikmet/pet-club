import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { servicesCatalog } from "@/entities/service/model/servicesCatalog";

const getPriceEntries = (row, columns, includeEmpty = true) => {
  return columns
    .map((column) => {
      const value = row.prices?.[column.id];
      if (!includeEmpty && (value === null || value === undefined || value === "")) {
        return null;
      }

      return {
        id: column.id,
        label: column.label,
        value: value ?? "-"
      };
    })
    .filter(Boolean);
};

export const useServicesCatalog = () => {
  const [activeTabId, setActiveTabId] = useState(servicesCatalog[0]?.id ?? "");
  const [query, setQuery] = useState("");

  const tabs = useMemo(
    () =>
      servicesCatalog.map((category) => ({
        id: category.id,
        label: category.tabLabel
      })),
    []
  );

  const activeCategory = useMemo(
    () => servicesCatalog.find((category) => category.id === activeTabId) ?? servicesCatalog[0],
    [activeTabId]
  );

  const normalizedQuery = query.trim();
  const isSearching = normalizedQuery.length > 0;

  const searchSource = useMemo(
    () =>
      servicesCatalog.flatMap((category) =>
        category.rows.map((row) => {
          const priceEntries = getPriceEntries(row, category.columns, false);
          return {
            id: `${category.id}-${row.id}`,
            name: row.name,
            aliases: row.aliases ?? [],
            categoryId: category.id,
            categoryLabel: category.tabLabel,
            categorySubtitle: category.subtitle,
            highlight: Boolean(row.highlight),
            priceEntries
          };
        })
      ),
    []
  );

  const fuse = useMemo(
    () =>
      new Fuse(searchSource, {
        includeScore: true,
        threshold: 0.34,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: [
          { name: "name", weight: 0.76 },
          { name: "aliases", weight: 0.24 }
        ]
      }),
    [searchSource]
  );

  const results = useMemo(() => {
    if (!isSearching) return [];

    return fuse.search(normalizedQuery).map((item) => item.item);
  }, [fuse, isSearching, normalizedQuery]);

  const onChangeTab = (nextTabId) => setActiveTabId(nextTabId);

  return {
    tabs,
    activeTabId,
    activeCategory,
    onChangeTab,
    query,
    setQuery,
    isSearching,
    results,
    getPriceEntries
  };
};
