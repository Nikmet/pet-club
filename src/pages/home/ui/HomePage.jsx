import { Suspense, lazy } from "react";
import { SiteHeader } from "@/widgets/site-header/ui/SiteHeader";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import styles from "./HomePage.module.scss";

const AboutSection = lazy(() =>
  import("@/widgets/about/ui/AboutSection").then((module) => ({ default: module.AboutSection }))
);
const GallerySection = lazy(() =>
  import("@/widgets/gallery/ui/GallerySection").then((module) => ({ default: module.GallerySection }))
);
const ServicesSection = lazy(() =>
  import("@/widgets/services/ui/ServicesSection").then((module) => ({ default: module.ServicesSection }))
);
const ReviewsSection = lazy(() =>
  import("@/widgets/reviews/ui/ReviewsSection").then((module) => ({ default: module.ReviewsSection }))
);
const BookingSection = lazy(() =>
  import("@/widgets/booking/ui/BookingSection").then((module) => ({ default: module.BookingSection }))
);
const SiteFooter = lazy(() =>
  import("@/widgets/site-footer/ui/SiteFooter").then((module) => ({ default: module.SiteFooter }))
);

const SectionFallback = () => <section className={styles.sectionFallback} aria-hidden="true" />;

export const HomePage = () => {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ReviewsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <BookingSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
    </>
  );
};
