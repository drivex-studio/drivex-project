import FeaturedWorkSectionClient from "@components/sections/FeaturedWorkSectionClient";
import { getFeaturedWorkSectionData } from "@lib/sanity/queries/FeaturedWorkSectionData";

export async function FeaturedWorkSectionContent() {
  const data = await getFeaturedWorkSectionData();

  if (!data?.content?.caseStudies?.length) {
    return null;
  }

  return (
    <section
      data-theme={data.theme}
      data-page-builder-section="featuredWorkSection"
      className={data.className}
    >
      <FeaturedWorkSectionClient section={data} />
    </section>
  );
}
