import { useEffect, useRef, useState } from "react";
import styles from "./HoverVideo.module.scss";

export const HoverVideo = ({
    className = "",
    videoSrc,
    posterSrc,
    title,
    rounded = true,
    previewTime = 0.6
}) => {
    const tileRef = useRef(null);
    const videoRef = useRef(null);
    const playPendingRef = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoActivated, setIsVideoActivated] = useState(false);
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

    const playVideoFromStart = video => {
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

    const startPlayback = () => {
        setIsVideoActivated(true);
        const video = videoRef.current;
        if (!video) return;

        if (video.readyState < 1) {
            playPendingRef.current = true;
            return;
        }

        playVideoFromStart(video);
    };

    const stopPlayback = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        setPreviewFrame(video);
        setIsPlaying(false);
        playPendingRef.current = false;
    };

    const handleCanPlay = () => {
        if (!playPendingRef.current) return;

        playPendingRef.current = false;
        playVideoFromStart(videoRef.current);
    };

    useEffect(() => {
        const node = tileRef.current;
        if (!node || isVideoActivated) return;

        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries;
                if (!entry?.isIntersecting) return;

                setIsVideoActivated(true);
                observer.disconnect();
            },
            {
                rootMargin: "300px 0px"
            }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [isVideoActivated]);

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
            ref={tileRef}
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
                src={isVideoActivated ? videoSrc : undefined}
                poster={posterSrc}
                onLoadedMetadata={handleLoadedMetadata}
                onLoadedData={handleLoadedMetadata}
                onCanPlay={handleCanPlay}
                muted
                loop
                playsInline
                preload={isVideoActivated ? "metadata" : "none"}
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
