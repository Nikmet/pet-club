import { Button } from "@/shared/ui/button/Button";
import { clubInfo } from "@/entities/club/model/clubInfo";
import { getPublicAssetUrl } from "@/shared/lib/getPublicAssetUrl";
import styles from "./BookingSection.module.scss";

export const BookingSection = () => {
  return (
    <section className={styles.section} id="booking">
      <div className={styles.container}>
        <div className={styles.box} style={{ "--booking-bg": `url("${getPublicAssetUrl("hero2.jpg")}")` }}>
          <h2>Ваш питомец достоин лучшего</h2>
          <p>
            Забронируйте удобное время для визита прямо сейчас. Наши администраторы свяжутся с вами для
            подтверждения деталей.
          </p>
          <div className={styles.actions}>
            <Button as="a" href={clubInfo.website} target="_blank" rel="noreferrer" variant="light">
              Записаться онлайн
            </Button>
            <Button as="a" href={clubInfo.phoneLink} variant="outlineLight">
              Позвонить
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
