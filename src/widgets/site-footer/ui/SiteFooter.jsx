import { Logo } from "@/shared/ui/logo/Logo";
import { clubInfo } from "@/entities/club/model/clubInfo";
import styles from "./SiteFooter.module.scss";

export const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <Logo className={styles.logo} />
            <p className={styles.description}>
              Премиальный салон для собак и кошек в центре Владимира. Забота, стиль и профессионализм в каждой
              детали.
            </p>
          </div>

          <div className={styles.column}>
            <h3>МЕНЮ</h3>
            <a href="#about">О салоне</a>
            <a href="#services">Услуги</a>
            <a href="#gallery">Галерея</a>
            <a href="#reviews">Отзывы</a>
          </div>

          <div className={styles.column}>
            <h3>КОНТАКТЫ</h3>
            <a href={clubInfo.phoneLink}>{clubInfo.phone}</a>
            <a href={clubInfo.website} target="_blank" rel="noreferrer">
              {clubInfo.website.replace("https://", "")}
            </a>
            <span>{clubInfo.address}</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <small>© 2025 Pet Club. Все права защищены.</small>
          <div>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
