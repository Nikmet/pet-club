import styles from "./Button.module.scss";

export const Button = ({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const Tag = as;
  return (
    <Tag className={`${styles.button} ${styles[variant] || ""} ${styles[size] || ""} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
};
