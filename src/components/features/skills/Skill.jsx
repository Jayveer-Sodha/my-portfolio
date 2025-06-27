import Image from "next/image";

const Skill = ({ src, alt }) => {
  return (
    <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px]">
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className="object-contain"
      />
    </div>
  );
};

export default Skill;
