import useBlackhole from "@/hooks/useBlackhole";
import { motion, AnimatePresence } from "framer-motion";

const BlackholeVideo = () => {
  const { isBlackHoleVisible } = useBlackhole();

  return (
    <AnimatePresence mode="wait">
      {isBlackHoleVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute bottom-10 left-auto w-full h-screen z-0 overflow-hidden rotate-180"
        >
          <video
            autoPlay
            muted
            loop
            className="top-[40%] left-auto w-full h-full absolute object-cover"
          >
            <source src="/videos/output.webm" type="video/webm" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlackholeVideo;
