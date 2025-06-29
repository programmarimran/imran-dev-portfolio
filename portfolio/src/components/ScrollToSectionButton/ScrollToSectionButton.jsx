import React from "react";
import useScrollToSection from "../../hooks/useScrollToSection";
import useVisibleWindow from "../../hooks/useVisibleWindow";

const ScrollToSectionButton = () => {
  const visible = useVisibleWindow();
  const sections = ["Skills", "Projects", "Contact"];
  const scrollToSection = useScrollToSection();
  if (!visible) return null;
  return (
    <div className="mt-10 text-center">
      <ul className="flex flex-wrap gap-4 justify-center text-start items-start ">
        {sections.map((sec, i) => (
          <li key={i}>
            <button
        key={i}
        onClick={() => scrollToSection(sec.replace(/\s/g, ""))}
        className="bg-white/10  hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all duration-200"
      >
        {sec}
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollToSectionButton;
