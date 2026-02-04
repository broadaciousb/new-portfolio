"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap/gsap-core";
import NavBar from "./navBar";
import Projects from "./projects";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";


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
        "Building modern web interfaces with an engineering mindset. Focused on clean UI, performance, and scalable technology structure.",
    });

    gsap.to(".stack", {
      duration: 4,
      scrambleText: "Next.js · React · Redux · Tailwind · TypeScript",
    });
  }, []);

  return (
    <div id="landing" className="relative h-[calc(95vh-80px)] sm:h-[calc(95vh-120px)] p-6 text-scramble__content">
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div className="w-[70%] overflow-x-hidden">
            <h1 className="name text-2xl sm:text-5xl md:text-6xl font-bold tracking-wide my-2">
              _____________
            </h1>
            <p className="title text-sm sm:text-3xl text-green-300/70 mt-1">
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
        <div className="space-y-3 text-sm leading-relaxed overflow-hidden">
          <p className="description opacity-80 text-xl sm:text-2xl md:text-3xl mb-12 max-w-[720px]">
            ______________________________________________________________________________________
          </p>
          <p className="stack opacity-60 text-xl md:text-3xl">
            ____________________
          </p>
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
      <div className="flex justify-between md:justify-around">
        <Link href="https://github.com/broadaciousb" className="github-link px-[12px] click">
          <FaGithub className="w-[60px] h-[60px] text-green-400 hover:text-green-400/50" />
        </Link>
        <Link href="https://www.linkedin.com/in/broady-butler-ei-8069aa173/" className="linkedin-link px-[12px] click">
          <FaLinkedin className="w-[60px] h-[60px] text-green-400 hover:text-green-400/50" />
        </Link>
        <Link href="/assets/Broady Butler Resume.pdf" download className="pdf-link px-[12px] click">
          <FaFilePdf className="w-[60px] h-[60px] text-green-400 hover:text-green-400/50" />
        </Link>
      </div>
      {/* Navbar */}
    </div>
  );
}
