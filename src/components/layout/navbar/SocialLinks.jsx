import { SOCIAL_LINKS } from "@/configs/linksData";
import clsx from "clsx";
import Link from "next/link";

const SocialLinks = ({ mobile = false, onMenuClick }) => (
  <div
    className={clsx(
      "flex gap-3 items-center",
      mobile && "justify-center hidden"
    )}
  >
    {SOCIAL_LINKS.map(({ src, alt, className, onClick, link }) => (
      <Link
        href={link}
        key={alt}
        alt={alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          key={alt}
          className={className}
          src={src}
          alt={alt}
          onClick={onClick ? () => onClick(onMenuClick) : undefined}
        />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
