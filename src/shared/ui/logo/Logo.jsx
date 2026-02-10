import styles from "./Logo.module.scss";

export const Logo = ({ className = "", href = "#hero", label = "На главную Pet Club" }) => {
  return (
    <a className={`${styles.logo} ${className}`.trim()} href={href} aria-label={label}>
      <span>Pet Club</span>
    </a>
  );
};
