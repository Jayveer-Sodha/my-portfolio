import clsx from "clsx";
import Link from "next/link";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import FooterNote from "@/components/layout/FooterNote";
import { TEXT_GRADIENT_CLASSNAME } from "@/lib/constants";
import { WHATSAPP_LINK } from "@/configs/linksData";

const ContactSection = () => {
  return (
    <Section id="contacts">
      <Text
        title
        classNames={clsx("mx-auto lg:w-[60%] lg:text-5xl lg:!text-center")}
      >
        Ready to take <span className={TEXT_GRADIENT_CLASSNAME}>your</span>{" "}
        digital presence to the next level?
      </Text>
      <Text classNames="my-2">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </Text>
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="items-center content-center w-full lg:w-[350px] h-[40px] mt-2 group bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 hover:border-white/30"
      >
        <span
          className={clsx(
            "flex items-center justify-center mx-auto gap-1 hover:text-[#b49bff] hover:scale-110 transform transition-transform duration-200 ease-in-out"
          )}
        >
          Contact Me
          <span
            className="w-5 h-5 bg-[url('/images/whatsapp.png')] bg-contain bg-no-repeat"
            aria-hidden="true"
          />
        </span>
      </Link>
      <FooterNote />
    </Section>
  );
};
export default ContactSection;
