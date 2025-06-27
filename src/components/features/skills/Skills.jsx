import Skill from "./Skill";
import SKILLS_IMAGES from "@/data/skillsData";

const Skills = () => {
  return (
    <div className="flex items-center  flex-col pt-5">
      {Object.entries(SKILLS_IMAGES).map(([key, stack]) => (
        <div
          key={key}
          className="flex flex-row p-2 w-fit justify-center gap-2 "
        >
          {stack.map(({ src, alt }, key) => (
            <Skill src={src} alt={alt} key={key} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
