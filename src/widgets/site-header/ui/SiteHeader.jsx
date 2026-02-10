import { Logo } from "@/shared/ui/logo/Logo";
import { Button } from "@/shared/ui/button/Button";
import { clubInfo } from "@/entities/club/model/clubInfo";
import styles from "./SiteHeader.module.scss";

const navItems = [
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" }
];

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Logo className={styles.logo} />
          <nav className={styles.nav} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className={styles.right}>
            <a className={styles.phone} href={clubInfo.phoneLink}>
              {clubInfo.phone}
            </a>
            <Button as="a" href="#booking" variant="primary" size="small">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
