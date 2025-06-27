import Text from "@/components/ui/Text";

// components/features/hero/HeroIntro.js
const HeroIntro = () => {
  return (
    <div className="flex-1 items-center justify-center flex flex-col">
      <header className="text-2xl font-bold lg:text-4xl w-full">
        <Text title>
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-[#d8b4fe] to-[#22d3ee] bg-clip-text text-transparent">
            Jayveer Sodha
          </span>
        </Text>
        <Text subTitle>Full-Stack JavaScript Developer.</Text>
      </header>

      <Text classNames="lg:text-justify">
        Driven by curiosity and purpose, I design and develop digital solutions
        that connect ideas with execution. If you’re looking for someone to take
        your vision and craft it into an experience — you’re in the right place.
      </Text>
    </div>
  );
};

export default HeroIntro;
