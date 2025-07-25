import { GoMoveToTop } from "react-icons/go";
import useVisibleWindow from "../../hooks/useVisibleWindow";

const ScrollToTopButton = () => {
  const visible = useVisibleWindow();

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-gradient-to-b from-indigo-500 to-primary hover:from-primary/50 hover:to-indigo-500 text-white rounded-full shadow-lg  transition"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <GoMoveToTop size={20} />
    </button>
  );
};

export default ScrollToTopButton;
