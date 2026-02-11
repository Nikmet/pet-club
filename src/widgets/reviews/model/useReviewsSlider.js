import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const getSlidesPerView = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

export const useReviewsSlider = (totalSlides) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === "undefined" ? 3 : getSlidesPerView(window.innerWidth)
  );
  const [trackIndex, setTrackIndex] = useState(() =>
    typeof window === "undefined" ? 3 : getSlidesPerView(window.innerWidth)
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const frameRef = useRef(null);

  const canSlide = totalSlides > slidesPerView;
  const minTrackIndex = slidesPerView;
  const maxTrackIndex = useMemo(
    () => slidesPerView + Math.max(0, totalSlides - 1),
    [slidesPerView, totalSlides]
  );

  const scheduleTransitionRestore = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  }, []);

  const jumpToTrackIndex = useCallback(
    (target) => {
      setIsTransitionEnabled(false);
      setTrackIndex(target);
      scheduleTransitionRestore();
    },
    [scheduleTransitionRestore]
  );

  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    },
    []
  );

  useEffect(() => {
    if (totalSlides <= 0) {
      setIndex(0);
      setTrackIndex(0);
      return;
    }

    setIndex((prev) => {
      const normalized = ((prev % totalSlides) + totalSlides) % totalSlides;
      jumpToTrackIndex(minTrackIndex + normalized);
      return normalized;
    });
  }, [jumpToTrackIndex, minTrackIndex, slidesPerView, totalSlides]);

  const next = useCallback(() => {
    if (!canSlide) return;

    setIndex((prev) => (prev + 1) % totalSlides);
    setTrackIndex((prev) => prev + 1);
  }, [canSlide, totalSlides]);

  const prev = useCallback(() => {
    if (!canSlide) return;

    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setTrackIndex((prev) => prev - 1);
  }, [canSlide, totalSlides]);

  const handleTrackTransitionEnd = useCallback(() => {
    if (!canSlide || totalSlides <= 0) return;

    if (trackIndex > maxTrackIndex) {
      jumpToTrackIndex(minTrackIndex);
      return;
    }

    if (trackIndex < minTrackIndex) {
      jumpToTrackIndex(maxTrackIndex);
    }
  }, [canSlide, jumpToTrackIndex, maxTrackIndex, minTrackIndex, totalSlides, trackIndex]);

  useEffect(() => {
    if (isPaused || !canSlide) return undefined;

    const timer = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(timer);
  }, [canSlide, isPaused, next]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return {
    canSlide,
    index,
    isTransitionEnabled,
    slidesPerView,
    trackIndex,
    next,
    prev,
    handleTrackTransitionEnd,
    pause,
    resume
  };
};
