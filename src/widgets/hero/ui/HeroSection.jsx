import { Button } from "@/shared/ui/button/Button";
import { getPublicAssetUrl } from "@/shared/lib/getPublicAssetUrl";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.badge}>ПРЕМИУМ КЛАСС</p>
            <h1>Искусство ухода за вашим питомцем</h1>
            <p className={styles.lead}>
              Профессиональный груминг-салон во Владимире.
              <br />
              Мы создаем безупречный стиль и обеспечиваем максимальный комфорт для собак и кошек.
            </p>
            <div className={styles.actions}>
              <Button as="a" href="#booking" variant="primary">
                Записаться онлайн
              </Button>
              <Button as="a" href="#services" variant="ghost">
                Наши услуги
              </Button>
            </div>
            <div className={styles.metrics}>
              <div>
                <strong>5.0</strong>
                <span>Рейтинг на Яндекс</span>
              </div>
              <div>
                <strong>2к+</strong>
                <span>Довольных клиентов</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>Лет опыта</span>
              </div>
            </div>
          </div>
          <figure className={styles.photo}>
            <img src={getPublicAssetUrl("hero.jpg")} alt="Питомец и мастер в груминг-салоне" />
            <figcaption className={styles.reviewCard}>
              <div className={styles.avatar} aria-hidden="true">
                <img src={getPublicAssetUrl("avatar.png")} alt="МИ" />
              </div>
              <div>
                <strong>Мария Иванова</strong>
                <p>«Лучший салон в городе! Мой шпиц выглядит просто великолепно.»</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
