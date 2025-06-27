import Text from "@/components/ui/Text";
import { HERO_CONTENT } from "@/data/content";

const HeroIntro = () => {
  return (
    <div className="flex-1 items-center justify-center flex flex-col">
      <header className="text-2xl font-bold lg:text-4xl w-full">
        <Text title>
          {HERO_CONTENT.TITLE_INTRO}{" "}
          <span className="bg-gradient-to-r from-[#d8b4fe] to-[#22d3ee] bg-clip-text text-transparent">
            {HERO_CONTENT.TITLE_NAME}
          </span>
        </Text>
        <Text subTitle>{HERO_CONTENT.TITLE_ROLE}</Text>
      </header>

      <Text classNames="lg:text-justify">{HERO_CONTENT.DESCRIPTION}</Text>
    </div>
  );
};

export default HeroIntro;
