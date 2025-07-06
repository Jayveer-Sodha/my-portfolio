import { useEffect } from "react";

const useLockScroll = (lock) => {
  useEffect(() => {
    const html = document.documentElement;

    if (lock) {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      html.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [lock]);
};

export default useLockScroll;
