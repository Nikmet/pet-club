import { useEffect, useRef, useState } from "react";
import styles from "./HoverVideo.module.scss";

export const HoverVideo = ({
    className = "",
    videoSrc,
    title,
    rounded = true,
    previewTime = 0.6
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ratio, setRatio] = useState("9 / 16");

    const getPreviewTime = video => {
        if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
            return 0;
        }

        return Math.min(previewTime, Math.max(video.duration - 0.15, 0));
    };

    const setPreviewFrame = video => {
        if (!video || video.readyState < 1) return;

        const nextPreviewTime = getPreviewTime(video);
        if (Math.abs(video.currentTime - nextPreviewTime) > 0.05) {
            video.currentTime = nextPreviewTime;
        }
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.videoWidth > 0 && video.videoHeight > 0) {
            setRatio(`${video.videoWidth} / ${video.videoHeight}`);
        }

        setPreviewFrame(video);
    };

    const startPlayback = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.readyState >= 1) {
            video.currentTime = 0;
        }

        setIsPlaying(true);
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
                setIsPlaying(false);
            });
        }
    };

    const stopPlayback = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        setPreviewFrame(video);
        setIsPlaying(false);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onSeeked = () => {
            if (!isPlaying) {
                video.pause();
            }
        };

        video.addEventListener("seeked", onSeeked);
        return () => {
            video.removeEventListener("seeked", onSeeked);
        };
    }, [isPlaying]);

    const roundedClass = rounded ? styles.rounded : "";

    return (
        <article
            className={`${styles.tile} ${roundedClass} ${className}`.trim()}
            onMouseEnter={startPlayback}
            onMouseLeave={stopPlayback}
            onFocus={startPlayback}
            onBlur={stopPlayback}
            tabIndex={0}
            aria-label={title}
            style={{ "--tile-ratio": ratio }}
        >
            <video
                ref={videoRef}
                className={styles.video}
                src={videoSrc}
                onLoadedMetadata={handleLoadedMetadata}
                onLoadedData={handleLoadedMetadata}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={title}
            />
            <div
                className={`${styles.overlay} ${isPlaying ? styles.overlayHidden : ""}`.trim()}
                aria-hidden={isPlaying}
            >
                <span>{title}</span>
            </div>
        </article>
    );
};
