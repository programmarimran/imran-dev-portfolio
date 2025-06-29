import { useCallback } from "react";
import { useNavigate, } from "react-router";

const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // যদি এখন অন্য পেইজে থাকো, আগে home e যাও
        navigate("/", { replace: false });

        // একটু delay দিয়ে scroll করাও যাতে Home পেজ লোড হয়
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          target?.scrollIntoView({ behavior: "smooth" });
        }, 100); // 100ms delay
      }
    },
    [navigate]
  );

  return scrollToSection;
};

export default useScrollToSection;
