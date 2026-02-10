import { SiteHeader } from "@/widgets/site-header/ui/SiteHeader";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { AboutSection } from "@/widgets/about/ui/AboutSection";
import { GallerySection } from "@/widgets/gallery/ui/GallerySection";
import { ServicesSection } from "@/widgets/services/ui/ServicesSection";
import { ReviewsSection } from "@/widgets/reviews/ui/ReviewsSection";
import { BookingSection } from "@/widgets/booking/ui/BookingSection";
import { SiteFooter } from "@/widgets/site-footer/ui/SiteFooter";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <ReviewsSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
};
