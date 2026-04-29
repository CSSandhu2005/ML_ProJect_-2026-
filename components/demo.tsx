"use client";

import { CinematicFooter } from "./motion-footer";

export default function Demo() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      {/* The Cinematic Footer is injected here */}
      <CinematicFooter />
    </div>
  );
}
