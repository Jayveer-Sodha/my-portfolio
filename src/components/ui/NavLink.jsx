import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";

const NavLink = React.memo(
  ({ href, label, mobile, className, isActive, handleClick = null }) => {
    return (
      <Link
        href={href}
        onClick={() => handleClick && handleClick(href)}
        className={className}
      >
        <span
          className={clsx(
            mobile && "block text-center",
            isActive && "text-[#b49bff]",
            HOVER_SCALE_ANIMATION_CLASSNAME,
            "text-[1rem] md:text-[1.1rem] font-medium transition-colors duration-300 cursor-pointer"
          )}
        >
          {label}
        </span>
      </Link>
    );
  }
);
export default NavLink;
