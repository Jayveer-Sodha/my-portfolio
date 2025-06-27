import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex-1">
      <Image
        width={500}
        height={500}
        src="/images/hero-bg.svg"
        alt="Developer illustration"
        className="w-full max-w-md lg:max-w-lg mx-auto"
      />
    </div>
  );
};

export default HeroImage;
