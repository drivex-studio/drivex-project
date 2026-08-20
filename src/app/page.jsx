import { getHeroSectionData } from "@lib/sanity/queries/HeroSectionData";
import { HeroSectionContent } from "@components/sections/contents/HeroSectionContent";

export default async function HomePage() {
  const heroData = await getHeroSectionData();

  return (
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
  );
}