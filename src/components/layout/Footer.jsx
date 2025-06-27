import { FOOTER_CONTENT } from "@/data/content";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center items-center gap-2 text-[0.7rem] lg:text-sm text-gray-400 my-5">
      <span>{FOOTER_CONTENT.COPYRIGHT}</span>
      <span className="hidden lg:inline text-base mx-2 text-gray-500">
        {FOOTER_CONTENT.SEPARATOR}
      </span>
      <span className="text-white">{FOOTER_CONTENT.AVAILABILITY}</span>
    </footer>
  );
};

export default Footer;
