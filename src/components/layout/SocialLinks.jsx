import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/data/linksData";

const SocialLinks = () => (
  <div className="flex gap-3 items-center">
    {SOCIAL_LINKS.map(({ src, alt, className, link }) => (
      <Link
        href={link}
        key={alt}
        alt={alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image width={10} height={10} key={alt} className={className} src={src} alt={alt} />
      </Link>
    ))}
  </div>
);

export default SocialLinks;
