import { useRef, useState } from "react";
import { motion } from "framer-motion"; // original webpack module ID: 846932
import { ScrollAnimatedHeadline } from "./ScrollAnimatedHeadline.jsx"; // original webpack module ID: 819734
import { ScrambleGroup } from "./ScrambleGroup.jsx"; // original webpack module ID: 312512
import { ScrambleText } from "./ScrambleText.jsx"; // original webpack module ID: 213332
import { clsx as cx } from "clsx"; // original webpack module ID: 801335
import { easings } from "./easings.js"; // original webpack module ID: 660513

const power3Out = easings.power3Out;
const backOut = easings.backOut;

function Divider({ className }) {
  return <div className={cx("h-px w-full bg-border", className)} />;
}

function IndexedGridSectionClient({
  headline,
  text,
  label,
  items,
  disableCursor = true,
  variant = "standard",
}) {
  const scrambleReadyRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleEnter = (index) => {
    setHoveredIndex(index);
    scrambleReadyRefs.current[index]?.();
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const itemCount = items.length;
  const isTwoColumn = variant === "twoColumn";

  const header =
    (headline?.text || text || label) && (
      <div className="grid-layout mb-48 lg:mb-64">
        <div
          className={`${
            isTwoColumn ? "lg:grid-start-4 lg:grid-span-6" : ""
          } grid-span-12 flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between`}
        >
          {headline?.text && (
            <ScrollAnimatedHeadline
              headline={{ text: headline.text, level: headline.level ?? "h2" }}
              className="lg:max-w-1/2"
            />
          )}
          {text && <span className="section-label">{text}</span>}
        </div>
        {label && (
          <div
            className={`${
              isTwoColumn ? "lg:grid-start-4 lg:grid-span-6" : ""
            } grid-span-12 mt-32 flex items-center gap-8`}
          >
            <div className="h-12 w-12 bg-brand" />
            <span className="text-accent-sm uppercase">{label}</span>
          </div>
        )}
      </div>
    );

  const renderItem = (item, index, spanClass) => {
    const isHovered = hoveredIndex === index;
    const caseTitle = item.caseStudy?.title;
    const rightStripes = itemCount - index - 1;
    const showCursor = !disableCursor && caseTitle;

    return (
      <motion.div
        key={item._key}
        className={spanClass}
        onMouseEnter={() => handleEnter(index)}
        onMouseLeave={handleLeave}
        data-cursor-text={showCursor ? caseTitle.toUpperCase() : undefined}
        data-cursor-stripes-left={showCursor ? index : undefined}
        data-cursor-stripes-right={showCursor ? rightStripes : undefined}
      >
        <div className="relative flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20">
          <motion.span
            className="absolute top-1/2 left-0 hidden size-12 bg-brand lg:block"
            initial={false}
            animate={{ rotate: isHovered ? 0 : -90, scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: backOut }}
            aria-hidden="true"
          />
          <motion.h3
            className="text-accent uppercase"
            animate={{ x: isHovered ? 28 : 0 }}
            transition={{ duration: 0.5, ease: power3Out }}
          >
            <ScrambleText
              duration={0.5}
              revealMode={true}
              onReady={(fn) => {
                scrambleReadyRefs.current[index] = fn;
              }}
            >
              {item.title}
            </ScrambleText>
          </motion.h3>
        </div>
        <Divider />
        <p className="pt-16 pb-24 text-body text-foreground-muted lg:max-w-2/3 lg:pt-20 lg:pb-32">
          {item.description}
        </p>
      </motion.div>
    );
  };

  const twoColumnItems =
    isTwoColumn && (
      <div className="grid-span-12 lg:grid-start-4 lg:grid-span-6 lg:grid-subgrid">
        {items.map((item, index) =>
          renderItem(item, index, "grid-span-12 md:grid-span-6 lg:grid-span-3")
        )}
      </div>
    );

  const standardItems =
    !isTwoColumn &&
    items.map((item, index) =>
      renderItem(item, index, "grid-span-12 md:grid-span-6 lg:grid-span-4")
    );

  return (
    <div className="grid-container">
      {header}
      <ScrambleGroup stagger={0.08} start="top 85%">
        <div className="grid-layout">
          {twoColumnItems}
          {standardItems}
        </div>
      </ScrambleGroup>
    </div>
  );
}

export { IndexedGridSectionClient };
