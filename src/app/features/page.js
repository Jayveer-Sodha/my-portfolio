import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import clsx from "clsx";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});
const Features = () => {
  return (
    <Container
      className={clsx(
        "relative text-white min-h-screen flex flex-col items-center p-15",
        orbitron.className
      )}
    >
      <div className=" text-shadow-[0_0_10px_#A855F7] text-3xl font-bold mt-10">
        Connect Across the Cosmos - COMING SOON
      </div>
      {/* <div className="opacity-75 text-1xl mt-2">
        Create or join a space for stellar video calls
      </div> */}
      {/* <div className="w-full flex justify-center text-1xl py-10 gap-5">
        <button className="group bg-[#A855F7] text-[#0F172A] overflow-hidden transition-transform duration-200 ease-in-out border border-white/10 hover:scale-115 hover:shadow-[0_0_10px_#A855F7]  px-10 py-5 rounded-full">
          Create Space
        </button>
        <button className="group bg-white/5 overflow-hidden hover:scale-115 hover:shadow-[0_0_10px_#A855F7] transition-transform duration-200 ease-in-out  border border-[bg-[#A855F7] text-[#b49bff] px-10 py-5 rounded-full">
          Join Space
        </button>
      </div> */}
    </Container>
  );
};
export default Features;
