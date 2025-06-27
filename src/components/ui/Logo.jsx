import Link from "next/link";
import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/images/pandaDev.png"
        alt="Jayveer Logo"
        className={`w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full ${HOVER_SCALE_ANIMATION_CLASSNAME}`}
      />
    </Link>
  );
};

export default Logo;
