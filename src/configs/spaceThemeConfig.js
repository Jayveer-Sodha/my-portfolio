const config = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#000000",
    },
  },
  particles: {
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: "delete",
        value: 0,
      },
      value: 250,
    },
    opacity: {
      value: {
        min: 0.5,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 0.25,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    color: {
      value: "#ffffff",
    },
    size: {
      value: {
        min: 0.5,
        max: 2,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    light: {
      area: {
        gradient: {
          start: {
            value: "#ffffff",
          },
          stop: {
            value: "#000000",
          },
        },
        radius: 1000,
      },
      shadow: {
        color: {
          value: "#000000",
        },
        length: 2000,
      },
    },
    move: {
      enable: true,
      direction: "none",
      speed: 1.8,
      random: true,
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      angle: {
        value: 90,
        offset: 0,
      },
      gravity: {
        acceleration: 9.81,
        enable: false,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
    },
  },
};

export default config;
