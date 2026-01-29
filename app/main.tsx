"use client"

import Image from "next/image";
import NavBar from "./components/navBar";
import Modal from "./components/modal";
import Heading from "./components/heading";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { IoMdMail } from "react-icons/io";
import NewLanding from "./components/newLanding";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleModal } from "./redux/ToggleModalSlice";
import { store } from "./redux/store";
import ReduxProvider from "./redux/provider";


export default function Main() {
  const isModalOpen: boolean = useAppSelector(
    (state: any) => state.toggleModal.isModalOpen,
  );
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <main
          className="
          container
          relative
          w-[90vw]
          h-[95vh]
          border
          border-green-500/40
          rounded-lgfont-mono
          text-green-400
          shadow-[0_0_25px_rgba(0,255,128,0.15)]
          overflow-y-auto
          terminal-scroll inset-0 bg-[linear-gradient(rgba(0,255,128,0.06)_1px,transparent_1px)] bg-[size:100%_3px]
        "
        >
          <script src="myJS/gsap.min.js"></script>
          {isModalOpen ? (
            <Modal />
          ) : (
            <>
              <NewLanding />
              <NavBar />
              <Projects />
            </>
          )}
        </main>
      </div>
  );
}