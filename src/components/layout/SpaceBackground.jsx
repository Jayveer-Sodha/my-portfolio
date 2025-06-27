"use client";

import React from "react";
import dynamic from "next/dynamic";
import SpaceThemeConfig from "@/configs/spaceThemeConfig";
import useParticleEngine from "@/hooks/useParticleEngine";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

const SpaceBackground = ({ children }) => {
  const { isEngineReady } = useParticleEngine();
  return (
    isEngineReady && (
      <>
        <Particles
          id="tsparticles"
          options={SpaceThemeConfig}
          aria-hidden="true"
        />
        {children}
      </>
    )
  );
};

export default SpaceBackground;
