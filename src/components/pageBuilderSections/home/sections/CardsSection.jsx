import { cx } from '@lib/vendor';
import CardsSectionClient from "@home/CardsSectionClient";
import { getCardsSectionData } from "@lib/sanity/queries/CardsSectionData";

export default async function CardsSection() {
  const data = await getCardsSectionData();

  if (!data?.cards?.length) {
    return null;
  }

  return (
    <section
      data-theme={data.theme}
      data-page-builder-section="cardsSection"
      className={cx(data.className)}
    >
      <div className="grid-container">
        <div className="grid-layout">
          <div className="grid-span-12">
            <CardsSectionClient cards={data.cards} fullHeight={data.fullHeight} />
          </div>
        </div>
      </div>
    </section>
  );
}
