import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";

const NavMenuButton = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className="h-[28px] w-[28px] z-50 lg:hidden cursor-pointer ml-auto flex  justify-center items-center">
      <Image
        src={menuOpen ? "/images/closeMenu.png" : "/images/menu.png"}
        width={60}
        alt="navMenuButton"
        height={60}
        onClick={() => setMenuOpen(!menuOpen)}
        className={clsx(
          HOVER_SCALE_ANIMATION_CLASSNAME,
          menuOpen ? "h-[22px]" : "h-[28px]",
          menuOpen ? "w-[22px]" : "w-[28px]"
        )}
      />
    </div>
  );
};
export default NavMenuButton;
