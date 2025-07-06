import { useEffect } from "react";

const useClickOutside = (ref, handler, active = true) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };

    if (active) {
      document.addEventListener("mousedown", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler, active]);
};

export default useClickOutside;
