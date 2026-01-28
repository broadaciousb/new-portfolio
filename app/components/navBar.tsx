"use client"

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleModal } from "../redux/ToggleModalSlice";

export default function NavBar() {

  const dispatch = useAppDispatch();

  return (
    <nav className="sticky top-0 z-100 bg-black w-full items-center font-mono text-green-400 text-4xl">
      <div className="nav__wrapper flex justify-between w-full h-[120px] px-[24px] items-center">
        <a href="#projects" className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          Projects
        </a>
        <a href="" className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          About Me
        </a>
        <button onClick={() => { dispatch(toggleModal())}} className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          Contact
        </button>
      </div>
    </nav>
  );
}
