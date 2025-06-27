import { HOVER_SCALE_ANIMATION_CLASSNAME } from "@/lib/constants";

const WHATSAPP_LINK = "https://wa.me/917016282912";

const NAV_LINKS = [
  { href: "/#aboutMe", label: "About Me" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contacts", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    src: "/images/linkedinIcon.png",
    alt: "LinkedIn",
    className: `h-[28px] w-[28px] ${HOVER_SCALE_ANIMATION_CLASSNAME}`,
    link: "https://www.linkedin.com/in/jayveersodha/",
  },
  {
    src: "/images/githubIcon.png",
    alt: "GitHub",
    className: `h-[28px] w-[28px] ${HOVER_SCALE_ANIMATION_CLASSNAME}`,
    link: "https://github.com/Jayveer-Sodha/",
  },
  {
    src: "/images/gmailIcon.png",
    alt: "Gmail",
    className: `h-[28px] w-[28px] ${HOVER_SCALE_ANIMATION_CLASSNAME}`,
    link: "mailto:jayveersodha1@gmail.com",
  },
  {
    src: "/images/whatsapp.png",
    alt: "WhatsApp",
    className: `h-[28px] w-[28px] ${HOVER_SCALE_ANIMATION_CLASSNAME}`,
    link: WHATSAPP_LINK,
  },
];

export { SOCIAL_LINKS, NAV_LINKS, WHATSAPP_LINK };
