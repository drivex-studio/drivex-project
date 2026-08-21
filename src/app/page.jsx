import { getHeroSectionData } from "@lib/sanity/queries/HeroSectionData";
import { HeroSectionContent } from "@components/sections/contents/HeroSectionContent";
import { CardsSectionContent } from "@components/sections/contents/CardsSectionContent";
import { AnimatedListSectionContent } from "@components/sections/contents/AnimatedListSectionContent";
import { FeaturedWorkSectionContent } from "@components/sections/contents/FeaturedWorkSectionContent";

export default async function HomePage() {
  const heroData = await getHeroSectionData();

  return (
  <>
    <HeroSectionContent
      className={heroData?.className}
      theme={heroData?.theme}
      headline={heroData?.headline}
      headlineLevel={heroData?.headlineLevel}
      headlineDisplay={heroData?.headlineDisplay}
      subtext={heroData?.subtext}
      ctas={heroData?.ctas}
      trustedBy={heroData?.trustedBy}
    />
    <CardsSectionContent />
    <AnimatedListSectionContent />
    <FeaturedWorkSectionContent />
    </>
  );
}