import { clubInfo } from "@/entities/club/model/clubInfo";
import styles from "./AboutSection.module.scss";
import { Clock, MapPinIcon } from "lucide-react";

export const AboutSection = () => {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <figure className={styles.image}>
                        <img src="/about.jpg" alt="Гость салона на груминге" />
                    </figure>
                    <div className={styles.content}>
                        <p className={styles.eyebrow}>О НАС</p>
                        <h2>Больше, чем просто стрижка</h2>
                        <p>
                            Мы создали Pet Club, вдохновляясь лучшими мировыми практиками ухода за животными. Наша
                            философия — это сочетание безупречного стиля, безопасности и любви к каждому гостю.
                        </p>
                        <p>
                            Каждый уголок нашего салона был продуман до мелочей: мы вложили много любви в интерьер,
                            приобрели качественную мебель и технику, – нам важно, чтобы вам и вашим питомцам было уютно
                            и комфортно
                        </p>
                        <p>
                            В салоне работают мастера, которые постоянно совершенствуют свои навыки, используя
                            премиальную косметику и профессиональное оборудование.
                        </p>
                        <div className={styles.cards}>
                            <article>
                                <span className={styles.icon}>
                                    <MapPinIcon />
                                </span>
                                <h3>Удобная локация</h3>
                                <p>{clubInfo.address}, Центр Владимира, парковка</p>
                            </article>
                            <article>
                                <span className={styles.icon}>
                                    <Clock />
                                </span>
                                <h3>Режим работы</h3>
                                <p>Ежедневно с 10:00 до 22:00. Без выходных</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
