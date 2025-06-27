import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { CONTACT_CONTENT } from "@/data/content";
import { TEXT_GRADIENT_CLASSNAME } from "@/lib/constants";
import SocialLinks from "@/components/layout/SocialLinks";

const ContactSection = () => {
  return (
    <Section id={CONTACT_CONTENT.SECTION_ID} className="!h-[30vh]">
      <Text title classNames="mx-auto lg:!text-center">
        {CONTACT_CONTENT.TITLE_PART1}
        <span className={TEXT_GRADIENT_CLASSNAME}>
          {CONTACT_CONTENT.TITLE_HIGHLIGHT}
        </span>
        {CONTACT_CONTENT.TITLE_PART2}
      </Text>
      <Text classNames="my-3">{CONTACT_CONTENT.DESCRIPTION}</Text>
      <SocialLinks />
    </Section>
  );
};
export default ContactSection;
