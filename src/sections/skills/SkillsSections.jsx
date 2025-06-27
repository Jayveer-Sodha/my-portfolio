import React from "react";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { SKILLS_CONTENT } from "@/data/content";
import Skills from "../../components/features/skills/Skills";

const SkillsSections = () => {
  return (
    <Section id={SKILLS_CONTENT.SECTION_ID} className="">
      <Text title gradient>
        {SKILLS_CONTENT.TITLE}
      </Text>
      <Text classNames="lg:w-[60%] mx-auto">{SKILLS_CONTENT.DESCRIPTION}</Text>
      <Skills />
    </Section>
  );
};

export default SkillsSections;
