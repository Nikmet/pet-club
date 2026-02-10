import { HoverVideo } from "@/shared/ui/hover-video/HoverVideo";
import styles from "./GallerySection.module.scss";
import { ArrowUpRight } from "lucide-react";

const galleryVideos = [
    {
        id: "g2",
        videoSrc: "/gallery/g2.mp4",
        title: "Корги такие милые!",
        previewTime: 5.5
    },
    {
        id: "corgi",
        videoSrc: "/gallery/g1.mp4",
        title: "Непоседа самоед и его коготки",
        previewTime: 7
    },
    {
        id: "g3",
        videoSrc: "/gallery/g3.mp4",
        title: "Почему он такой красивый?",
        previewTime: 2.6
    },
    {
        id: "g4",
        videoSrc: "/gallery/g4.mp4",
        title: "Он доволен, честно",
        previewTime: 0.9
    },
    {
        id: "g5",
        videoSrc: "/gallery/g5.mp4",
        title: "Французский интеллигент",
        previewTime: 1.3
    },
    {
        id: "g6",
        videoSrc: "/gallery/g6.mp4",
        title: 'Мистер "Мне пофиг"',
        previewTime: 1.5
    },
    {
        id: "g7",
        videoSrc: "/gallery/g7.mp4",
        title: "Это не игрушка. Он настоящий!",
        previewTime: 3
    }
];

export const GallerySection = () => {
    const featuredVideo = galleryVideos[0];
    const sideVideos = galleryVideos.slice(1, 7);

    return (
        <section className={styles.section} id="gallery">
            <div className={styles.container}>
                <header className={styles.head}>
                    <p>ГАЛЕРЕЯ</p>
                    <h2>Атмосфера Pet Club</h2>
                    <span>Взгляните на наших счастливых гостей и интерьеры салона</span>
                    <strong className={styles.hint}>Наведите на карточку, чтобы посмотреть видео</strong>
                </header>
                <div className={styles.layout}>
                    {featuredVideo ? (
                        <div className={styles.featured}>
                            <HoverVideo
                                key={featuredVideo.id}
                                videoSrc={featuredVideo.videoSrc}
                                title={featuredVideo.title}
                                previewTime={featuredVideo.previewTime}
                                className={styles.featuredVideo}
                            />
                        </div>
                    ) : null}
                    <div className={styles.grid}>
                        {sideVideos.map(item => (
                            <HoverVideo
                                key={item.id}
                                videoSrc={item.videoSrc}
                                title={item.title}
                                previewTime={item.previewTime}
                                className={styles.sideVideo}
                            />
                        ))}
                    </div>
                </div>
                <a
                    className={styles.instagramLink}
                    href="https://www.instagram.com/petclub_spa/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Другие видео можете посмотреть в нашем Instagramm <ArrowUpRight size={14} />
                </a>
            </div>
        </section>
    );
};
