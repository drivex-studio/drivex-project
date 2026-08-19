import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedHeadline } from "../AnimatedHeadline.jsx"; // original webpack module ID: 986246
import { AnimatedSubtext } from "../AnimatedSubtext.jsx"; // original webpack module ID: 410264
import { ButtonGroup } from "../ButtonGroup.jsx"; // original webpack module ID: 700504
import { useAsciiDelay } from "../hooks/useAsciiDelay.js"; // original webpack module ID: 197270
import { usePageEnter } from "../hooks/usePageEnter.js"; // original webpack module ID: 986950
import { usePageEnterContext } from "../hooks/usePageEnterContext.js"; // original webpack module ID: 222534
import { SanityImage } from "../SanityImage.jsx"; // original webpack module ID: 919848
import { clsx as cx } from "clsx"; // original webpack module ID: 801335
import { LOGO_HEIGHTS, getLogoSizeVars } from "../getLogoSizeVars.js"; // original webpack module ID: 781854

gsap.registerPlugin(useGSAP);

function HeroSectionContent({
  className,
  headline,
  headlineLevel,
  headlineDisplay,
  subtext,
  ctas,
  trustedBy,
  children,
}) {
  const sectionRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const trustedTitleRef = useRef(null);
  const logoRefs = useRef([]);
  const hasRevealedRef = useRef(false);
  const { prefersReducedMotion } = usePageEnterContext();
  const headlineRef = useRef(null);
  const asciiDelay = useAsciiDelay();

  const { contextSafe } = useGSAP(
    () => {
      if (prefersReducedMotion) return;
      const targets = [
        ctaRef.current,
        trustedTitleRef.current,
        ...logoRefs.current,
      ].filter(Boolean);
      gsap.set(targets, { opacity: 0, y: 20 });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  const onEnter = useMemo(
    () =>
      contextSafe((delay) => {
        if (hasRevealedRef.current) return;
        hasRevealedRef.current = true;
        const revealDelay = delay + asciiDelay;
        headlineRef.current?.reveal(revealDelay);
        subtextRef.current?.reveal(revealDelay + 0.15);
        const tl = gsap.timeline({ delay: revealDelay + 0.2 });
        if (ctaRef.current) {
          tl.to(
            ctaRef.current,
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0.1
          );
        }
        if (trustedTitleRef.current) {
          tl.to(
            trustedTitleRef.current,
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            0.2
          );
        }
        const logos = logoRefs.current.filter(Boolean);
        if (logos.length > 0) {
          tl.to(
            logos,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.08,
              onComplete: () => {
                for (const el of logos) {
                  if (el) gsap.set(el, { clearProps: "y,opacity" });
                }
              },
            },
            0.3
          );
        }
      }),
    [contextSafe, asciiDelay]
  );

  usePageEnter(onEnter, { priority: 1, skip: prefersReducedMotion });

  return (
    <div ref={sectionRef} className={cx(className)}>
      <div className="grid-span-12 lg:grid-span-8 flex flex-col justify-start gap-24 pt-24 lg:mt-auto lg:mb-auto lg:justify-center lg:gap-32 lg:pt-0">
        {headline && (
          <AnimatedHeadline
            ref={headlineRef}
            as={headlineLevel ?? "h1"}
            displayAs={headlineDisplay ?? undefined}
            className="text-foreground"
            skip={prefersReducedMotion}
          >
            {headline}
          </AnimatedHeadline>
        )}
        {subtext && (
          <AnimatedSubtext
            ref={subtextRef}
            className="max-w-xl text-body-sm text-foreground lg:text-body lg:text-foreground-muted"
            skip={prefersReducedMotion}
          >
            {subtext}
          </AnimatedSubtext>
        )}
        <div ref={ctaRef} className="pointer-events-auto">
          {ctas && <ButtonGroup buttonGroup={ctas} />}
        </div>
      </div>

      {children}

      {trustedBy?.items && trustedBy.items.length > 0 && (
        <div className="grid-span-12 lg:grid-span-7 pointer-events-auto mt-32 flex flex-col items-center gap-16 text-center lg:mt-0 lg:flex-row lg:items-center lg:text-left">
          {trustedBy.title && (
            <div
              ref={trustedTitleRef}
              className="max-w-auto shrink-0 lg:max-w-240"
            >
              <p className="text-accent-sm text-foreground-muted">
                {trustedBy.title}
              </p>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:justify-start lg:gap-x-16">
            {trustedBy.items.map((item, index) => {
              if (item._type === "image" && item.image) {
                const variant = item.variant ?? "horizontal";
                const { desktop } = LOGO_HEIGHTS[variant];
                return (
                  <span
                    key={item._key}
                    ref={(el) => {
                      logoRefs.current[index] = el;
                    }}
                    style={getLogoSizeVars(variant)}
                  >
                    <SanityImage
                      image={item.image}
                      alt={item.alt ?? "Client logo"}
                      height={desktop}
                      priority={true}
                      className="[&_img]:!h-(--logo-h) [&_img]:!w-auto [&_img]:!object-contain sm:[&_img]:!h-(--logo-h-desktop) h-auto w-auto grayscale transition-all hover:grayscale-0"
                    />
                  </span>
                );
              }
              if (item._type === "svgItem" && item.svgCode) {
                const variant = item.variant ?? "horizontal";
                return (
                  <span
                    key={item._key}
                    ref={(el) => {
                      logoRefs.current[index] = el;
                    }}
                    role="img"
                    aria-label={item.alt ?? "Client logo"}
                    style={getLogoSizeVars(variant)}
                    className="block h-(--logo-h) text-foreground-muted transition-colors hover:text-foreground sm:h-(--logo-h-desktop) [&_svg]:h-full [&_svg]:w-auto"
                    dangerouslySetInnerHTML={{ __html: item.svgCode }}
                  />
                );
              }
              if (item._type === "textItem" && item.text) {
                return (
                  <span
                    key={item._key}
                    ref={(el) => {
                      logoRefs.current[index] = el;
                    }}
                    className="text-accent-sm text-foreground-muted"
                  >
                    {item.text}
                  </span>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { HeroSectionContent };
