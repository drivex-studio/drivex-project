import { AnimatedButton } from "./AnimatedButton.jsx"; // original webpack module ID: 411602
import { AnimatedLink } from "./AnimatedLink.jsx"; // original webpack module ID: 553530
import { SanityLink } from "./SanityLink.jsx"; // original webpack module ID: 895743

function SanityButton({ button, className }) {
  if (!button.link?.href) return null;

  if (button.variant === "link") {
    const isExternal = button.link.type === "external";
    return (
      <AnimatedLink asChild={true} indicator={isExternal} className={className}>
        <SanityLink link={button.link}>{button.link.text}</SanityLink>
      </AnimatedLink>
    );
  }

  return (
    <AnimatedButton
      size={button.size}
      theme={button.theme}
      asChild={true}
      className={className}
    >
      <SanityLink link={button.link}>{button.link.text}</SanityLink>
    </AnimatedButton>
  );
}

export { SanityButton };
