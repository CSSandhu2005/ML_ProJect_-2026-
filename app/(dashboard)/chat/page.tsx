"use client";

import React from "react";
import RuixenMoonChat from "@/components/ruixen-moon-chat";

export default function Chat() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Chat Component */}
      <section className="flex justify-center items-start w-full">
        <RuixenMoonChat />
      </section>
    </main>
  );
}
