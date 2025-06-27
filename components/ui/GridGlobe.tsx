"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import the World component
const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

type ArcData = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export function GlobeDemo() {
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const globeConfig = useMemo(
    () => ({
      pointSize: 4,
      globeColor: "#062056",
      showAtmosphere: true,
      atmosphereColor: "#FFFFFF",
      atmosphereAltitude: 0.1,
      emissive: "#062056",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      polygonColor: "rgba(255,255,255,0.7)",
      ambientLight: "#38bdf8",
      directionalLeftLight: "#ffffff",
      directionalTopLight: "#ffffff",
      pointLight: "#ffffff",
      arcTime: 1000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
    }),
    []
  );

  const sampleArcs: ArcData[] = useMemo(() => {
    const data: ArcData[] = [
      { order: 1, startLat: -19.88, startLng: -43.95, endLat: -22.90, endLng: -43.17, arcAlt: 0.1, color: colors[0] },
      { order: 1, startLat: 28.61, startLng: 77.20, endLat: 3.13, endLng: 101.68, arcAlt: 0.2, color: colors[1] },
      { order: 1, startLat: -19.88, startLng: -43.95, endLat: -1.30, endLng: 36.85, arcAlt: 0.5, color: colors[2] },
      // ... (You can add more sampleArcs here following this type)
    ];

    // Randomize color for each arc from colors array
    return data.map((arc) => ({
      ...arc,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [colors]);

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
