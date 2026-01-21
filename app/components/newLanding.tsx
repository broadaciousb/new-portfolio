"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import NavBar from "./navBar";
import Projects from "./projects";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function NewLanding() {
  useEffect(() => {
    gsap.to(".name", {
      duration: 4,
      scrambleText: "Broady Butler",
    });

    gsap.to(".title", {
      duration: 4,
      scrambleText: "Frontend Developer · Engineer",
    });

    gsap.to(".description", {
      duration: 5,
      scrambleText: "Building modern web interfaces with an engineering mindset. Focused on clean UI, performance, and scalable design systems.",
    });

    gsap.to(".stack", {
      duration: 5,
      scrambleText: "Next.js · React · Redux · Tailwind · TypeScript",
    });
  }, []);

  return (
    <div className="relative h-[85vh] p-6 text-scramble__content">
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* Header */}
      <div className="mb-6">
        <h1 className="name text-3xl md:text-6xl font-bold tracking-wide my-2"></h1>
        <p className="title text-green-300/70 mt-1"></p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
        {/* Terminal Text */}
        <div className="space-y-3 text-sm leading-relaxed">
          <p className="description opacity-80 text-3xl mb-12">
            
          </p>
          <p className="stack opacity-60 text-3xl">
            
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-xs mx-auto">
          <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay rounded-md" />
          <img
            src="./assets/IMG_3083.JPEG"
            alt="Broady Butler"
            className="rounded-md border border-green-500/40 opacity-80 grayscale contrast-125"
          />
        </div>
      </div>
      {/* Navbar */}
      <NavBar />
    </div>
  );
}
