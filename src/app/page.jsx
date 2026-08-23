import HeroSection from “@home/sections/HeroSection”;
import CardsSection from “@home/sections/CardsSection”;
import AnimatedListSection from “@home/sections/AnimatedListSection”;
import FeaturedWorkSection from “@home/sections/FeaturedWorkSection”;
import IndexedGridSection from “@home/sections/IndexedGridSection”;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <AnimatedListSection />
      <FeaturedWorkSection />
      <IndexedGridSection />
    </>
  );
}
