import React from "react";
import Skills from "../../components/features/skills/Skills";
import Section from "@/components/ui/Section";
import { TEXT_GRADIENT_CLASSNAME } from "@/lib/constants";
import Text from "@/components/ui/Text";

const SkillsSections = () => {
  return (
    <Section id="skills" className="">
      <Text title gradient>
        The Tech Behind My Builds
      </Text>
      <Text classNames="lg:w-[60%] mx-auto">
        I'm a Full-Stack JavaScript Developer using a modern, proven stack to
        build everything from responsive UIs to scalable backends. I create
        dynamic web and mobile apps, integrating APIs and databases with a focus
        on performance and developer experience.
      </Text>
      <Skills />
    </Section>
  );
};

export default SkillsSections;
