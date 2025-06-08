import React from "react";
import { loadFull } from "tsparticles";
import { initParticlesEngine } from "@tsparticles/react";

/*
 * Custom hook to initialize the tsParticles engine.
 * Returns a flag indicating when the engine is fully loaded.
 * Ensures <Particles /> can be safely rendered after setup.
 */

const useParticleEngine = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return { isEngineReady: init };
};

export default useParticleEngine;
