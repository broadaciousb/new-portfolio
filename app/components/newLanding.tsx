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
      duration: 3,
      scrambleText: "Broady Butler",
    });

    gsap.to(".title", {
      duration: 3,
      scrambleText: "Frontend Developer · Engineer",
    });

    gsap.to(".description", {
      duration: 4,
      scrambleText:
        "Building modern web interfaces with an engineering mindset. Focused on clean UI, performance, and scalable design systems.",
    });

    gsap.to(".stack", {
      duration: 4,
      scrambleText: "Next.js · React · Redux · Tailwind · TypeScript",
    });
  }, []);

  return (
    <div className="relative h-[calc(95vh-120px)] p-6 text-scramble__content">
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="name text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide my-2">
              _____________
            </h1>
            <p className="title text-2xl sm:text-3xl text-green-300/70 mt-1">
              __________________________
            </p>
          </div>
          <div className="profile-picture small__img w-[80px] h-[80px] border border-green-500/40 rounded-[50%] overflow-hidden md:hidden">
            <img
              src="./assets/IMG_3083.JPEG"
              alt="Broady Butler"
              className="rounded-lg opacity-80 grayscale contrast-125 transform-[translateY(-10%)]"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
        {/* Terminal Text */}
        <div className="space-y-3 text-sm leading-relaxed">
          <p className="description opacity-80 text-2xl sm:text-2xl md:text-3xl mb-12 max-w-[720px] overflow-hidden">
            ______________________________________________________________________________________
          </p>
          <p className="stack opacity-60 text-2xl md:text-3xl">____________________</p>
        </div>

        {/* Image */}
        <div className="profile-picture relative w-full max-w-xs mx-auto border border-green-500/40 rounded-lg hidden md:block">
          <img
            src="./assets/IMG_3083.JPEG"
            alt="Broady Butler"
            className="rounded-md opacity-80 grayscale contrast-125"
          />
        </div>
      </div>
      {/* Navbar */}
    </div>
  );
}
