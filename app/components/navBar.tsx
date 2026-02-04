"use client"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleModal } from "../redux/ToggleModalSlice";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

export default function NavBar() {

  const dispatch = useAppDispatch();

  
  gsap.registerPlugin(ScrollToPlugin);

  function projectsScroll() {
    gsap.to("main", { duration: 2, scrollTo: "#projects"});
  };

  function aboutMeScroll() {
    gsap.to("main", { duration: 2, scrollTo: "#landing"})
  }

 

  return (
    <nav className="sticky top-0 z-100 bg-black w-full items-center font-mono text-green-400 sm:text-2xl md:text-4xl border-t border-b border-green-500/40">
      <div className="nav__wrapper flex justify-between w-full h-[80px] sm:h-[120px] px-[12px] sm:px-[24px] items-center bg-[linear-gradient(rgba(0,255,128,0.06)_1px,transparent_1px)] bg-[size:100%_3px]">
        <button onClick={() => {projectsScroll()}} className="nav-link click border border-green-500/40 rounded-lg p-[8px] sm:p-[12px] hover:bg-green-500/40 hover:text-black active:bg-black active:text-green-400">
          Projects
        </button>
        <button onClick={() => {aboutMeScroll()}} className="nav-link click border border-green-500/40 rounded-lg p-[8px] sm:p-[12px] hover:bg-green-500/40 hover:text-black active:bg-black active:text-green-400">
          About Me
        </button>
        <button onClick={() => { dispatch(toggleModal())}} className="nav-link click border border-green-500/40 rounded-lg p-[8px] sm:p-[12px] hover:bg-green-500/40 hover:text-black active:bg-black active:text-green-400">
          Contact
        </button>
      </div>
    </nav>
  );
}
