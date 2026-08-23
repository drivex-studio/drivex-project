import IndexedGridSectionClient from "@components/sections/IndexedGridSectionClient";
import { getIndexedGridSectionData } from "@lib/sanity/queries/IndexedGridSectionData";

export async function IndexedGridSectionContent() {
  const data = await getIndexedGridSectionData();

  if (!data) {
    return null;
  }

  return (
    <section
      data-theme="light"
      data-page-builder-section="indexedGridSection"
      className="bg-background pt-64 lg:pt-128 pb-64 lg:pb-128"
    >
      <IndexedGridSectionClient section={data} />
    </section>
  );
}
