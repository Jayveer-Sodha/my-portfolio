"use client";

import React from "react";
import Particles from "@tsparticles/react";
import SpaceThemeConfig from "../configs/spaceThemeConfig";
import useParticleEngine from "../hooks/useParticleEngine";

/*
 * SpaceBackground renders an animated space background using tsParticles.
 * Used to create a cosmic visual effect on the homepage.
 */

const SpaceBackground = () => {
  const { isEngineReady } = useParticleEngine();
  return (
    isEngineReady && <Particles id="tsparticles" options={SpaceThemeConfig} />
  );
};

export default SpaceBackground;
