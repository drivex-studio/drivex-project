import FeaturedWorkSectionClient from “@home/FeaturedWorkSectionClient”;
import { getFeaturedWorkSectionData } from "@lib/sanity/queries/FeaturedWorkSectionData";

export default async function FeaturedWorkSection() {
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
