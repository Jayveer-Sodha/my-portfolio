const BlackholeVideo = () => {
  return (
    <div className="absolute  bottom-10 left-auto w-full h-screen z-0 overflow-hidden rotate-180">
      <video
        autoPlay
        muted
        loop
        className="top-[40%] left-auto w-full h-full absolute object-cover"
      >
        <source src="/videos/output.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BlackholeVideo;
