import HeroImage from "@/components/features/hero/HeroImage";
import HeroIntro from "@/components/features/hero/HeroIntro";
import Section from "@/components/ui/Section";

const HeroSection = () => {
  return (
    <Section
      id="aboutMe"
      className="flex flex-col gap-10 lg:gap-0 p-2  lg:flex-row lg:mt-25"
    >
      <HeroIntro />
      <HeroImage />
    </Section>
  );
};

export default HeroSection;
