import { cx } from '@lib/vendor';
import AnimatedListSectionClient from "@home/AnimatedListSectionClient";
import { getAnimatedListSectionData } from "@lib/sanity/queries/AnimatedListSectionData";

export default async function AnimatedListSection() {
  const data = await getAnimatedListSectionData();

  if (!data?.items?.length) {
    return null;
  }

  return (
    <section
      data-theme={data.theme}
      data-page-builder-section="animatedListSection"
      className={cx(data.className)}
    >
      <AnimatedListSectionClient
        headline={data.headline}
        label={data.label}
        text={data.text}
        items={data.items}
        variant={data.variant}
        headlineDisplay={data.headlineDisplay}
        fixedMedia={data.fixedMedia}
      />
    </section>
  );
}
