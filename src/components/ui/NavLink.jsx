import clsx from "clsx";
import Link from "next/link";
import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";

const NavLink = ({ href, label, mobile, className, setMenuOpen }) => {
  return (
    <Link
      href={href}
      onClick={() => {
        if (mobile) {
          setTimeout(() => {
            setMenuOpen(!mobile);
          }, 300);
        }
      }}
    >
      <span
        className={clsx(
          className,
          mobile && "block text-center",
          "text-[1rem] md:text-[1.1rem] font-medium transition-colors duration-300 cursor-pointer",
          HOVER_SCALE_ANIMATION_CLASSNAME
        )}
      >
        {label}
      </span>
    </Link>
  );
};
export default NavLink;
