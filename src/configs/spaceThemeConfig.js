const config = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#030012",
    },
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: false, // Disable density to use fixed number
      },
    },
    opacity: {
      value: { min: 0.1, max: 1 },
      animation: {
        enable: true,
        speed: 1,
        sync: true,
        startValue: "top-left",
      },
    },
    color: {
      value: "#ffffff",
    },
    size: {
      value: { min: 0.1, max: 2 },
      animation: {
        enable: false,
      },
    },
    move: {
      enable: true,
      direction: "top-left",
      speed: 2.5,
      random: false,
      outModes: {
        default: "out",
      },
    },
  },
};

export default config;
