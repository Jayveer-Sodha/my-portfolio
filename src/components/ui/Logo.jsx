import Link from "next/link";
import Image from "next/image";
import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";

const Logo = ({ handleClick }) => {
  return (
    <Link href="/" onClick={handleClick}>
      <Image
        src="/images/pandaDev.png"
        alt="Jayveer Logo"
        width={45}
        height={45}
        className={`w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full ${HOVER_SCALE_ANIMATION_CLASSNAME}`}
      />
    </Link>
  );
};

export default Logo;
