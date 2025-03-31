import { useEffect, useRef } from "react";

export const useScrollSync = (
  sourceId: string,
  targetId: string,
  enabled: boolean = true,
) => {
  const isScrolling = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const sourceElement = document.getElementById(sourceId);
    const targetElement = document.getElementById(targetId);

    if (!sourceElement || !targetElement) return;

    const handleScroll = (event: Event) => {
      if (isScrolling.current) return;

      const source = event.target as HTMLElement;
      const sourceRect = source.getBoundingClientRect();

      // Find the section that's most visible in the viewport
      const sections = Array.from(source.getElementsByTagName("section"));
      const currentSection = sections.reduce((nearest, section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - sourceRect.top);

        return distance <
          Math.abs(nearest.getBoundingClientRect().top - sourceRect.top)
          ? section
          : nearest;
      }, sections[0]);

      if (currentSection) {
        isScrolling.current = true;

        // Find and scroll to the corresponding section in the target
        const targetSection = targetElement.querySelector(
          `[data-section-id="${currentSection.dataset.sectionId}"]`,
        );

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Reset the scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 100);
      }
    };

    sourceElement.addEventListener("scroll", handleScroll);
    return () => sourceElement.removeEventListener("scroll", handleScroll);
  }, [sourceId, targetId, enabled]);
};
