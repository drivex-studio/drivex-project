import { getHeroSectionData } from "@lib/sanity/queries/HeroSectionData";
import { HeroSectionContent } from "@components/sections/contents/HeroSectionContent";

export default async function HomePage() {
  const heroData = await getHeroSectionData();

  return (
    <div>
      <HeroSectionContent
        className={heroData?.className}
        headline={heroData?.headline}
        headlineLevel={heroData?.headlineLevel}
        headlineDisplay={heroData?.headlineDisplay}
        subtext={heroData?.subtext}
        ctas={heroData?.ctas}
        trustedBy={heroData?.trustedBy}
      />
    </div>
  );
}