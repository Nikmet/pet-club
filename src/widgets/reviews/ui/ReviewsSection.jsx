import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviewsData } from "@/entities/review/model/reviewsData";
import { useReviewsSlider } from "@/widgets/reviews/model/useReviewsSlider";
import { ReviewCard } from "./ReviewCard";
import styles from "./ReviewsSection.module.scss";

const SWIPE_THRESHOLD = 58;

export const ReviewsSection = () => {
    const {
        index,
        trackIndex,
        slidesPerView,
        next,
        prev,
        pause,
        resume,
        canSlide,
        isTransitionEnabled,
        handleTrackTransitionEnd
    } = useReviewsSlider(reviewsData.length);
    const viewportRef = useRef(null);
    const dragRef = useRef({ active: false, startX: 0, pointerId: null });
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const loopedReviews = useMemo(() => {
        if (reviewsData.length === 0) return [];

        const before = reviewsData
            .slice(-slidesPerView)
            .map((review, cloneIndex) => ({ review, key: `before-${review.id}-${cloneIndex}` }));
        const main = reviewsData.map(review => ({ review, key: `main-${review.id}` }));
        const after = reviewsData
            .slice(0, slidesPerView)
            .map((review, cloneIndex) => ({ review, key: `after-${review.id}-${cloneIndex}` }));

        return [...before, ...main, ...after];
    }, [slidesPerView]);

    const handlePointerDown = event => {
        if (!canSlide) return;
        if (event.pointerType === "mouse" && event.button !== 0) return;

        dragRef.current = {
            active: true,
            startX: event.clientX,
            pointerId: event.pointerId
        };

        setIsDragging(true);
        setDragOffset(0);
        pause();
        event.currentTarget.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = event => {
        if (!dragRef.current.active) return;
        const delta = event.clientX - dragRef.current.startX;
        setDragOffset(delta);
    };

    const finishDrag = event => {
        if (!dragRef.current.active) return;

        const viewportWidth = viewportRef.current?.clientWidth ?? 0;
        const threshold = Math.max(SWIPE_THRESHOLD, viewportWidth * 0.08);
        const delta = dragOffset;

        if (canSlide && Math.abs(delta) > threshold) {
            if (delta < 0) {
                next();
            } else {
                prev();
            }
        }

        dragRef.current.active = false;
        setIsDragging(false);
        setDragOffset(0);
        resume();

        if (dragRef.current.pointerId !== null) {
            event.currentTarget.releasePointerCapture?.(dragRef.current.pointerId);
        }
    };

    const handlePointerCancel = event => {
        dragRef.current.active = false;
        setIsDragging(false);
        setDragOffset(0);
        resume();
        event.currentTarget.releasePointerCapture?.(event.pointerId);
    };

    const baseTranslatePercent = -((trackIndex * 100) / slidesPerView);

    return (
        <section className={styles.section} id="reviews" onMouseEnter={pause} onMouseLeave={resume}>
            <div className={styles.container}>
                <header className={styles.head}>
                    <div>
                        <p>ОТЗЫВЫ</p>
                        <h2>Впечатления гостей</h2>
                    </div>
                    <div className={styles.controls}>
                        <button
                            type="button"
                            onClick={prev}
                            onFocus={pause}
                            onBlur={resume}
                            aria-label="Предыдущий отзыв"
                        >
                            <ChevronLeft size={17} />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            onFocus={pause}
                            onBlur={resume}
                            aria-label="Следующий отзыв"
                        >
                            <ChevronRight size={17} />
                        </button>
                    </div>
                </header>

                <p className={styles.srOnly} aria-live="polite">
                    Показ отзывов: слайд {index + 1}
                </p>

                <div
                    ref={viewportRef}
                    className={styles.viewport}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={finishDrag}
                    onPointerLeave={finishDrag}
                    onPointerCancel={handlePointerCancel}
                >
                    <div
                        className={`${styles.track} ${isDragging ? styles.dragging : ""} ${!isTransitionEnabled ? styles.noTransition : ""}`.trim()}
                        style={{
                            "--slides-per-view": slidesPerView,
                            transform: `translateX(calc(${baseTranslatePercent}% + ${dragOffset}px))`
                        }}
                        onTransitionEnd={handleTrackTransitionEnd}
                    >
                        {loopedReviews.map(({ review, key }) => (
                            <div className={styles.slide} key={key}>
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
