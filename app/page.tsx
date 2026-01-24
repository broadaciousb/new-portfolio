import Image from "next/image";
import NavBar from "./components/navBar";
import Modal from "./components/modal";
import Heading from "./components/heading";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { IoMdMail } from "react-icons/io";
import NewLanding from "./components/newLanding";

export default function Home() {
  //Template ID: template_2tit16r

  //Service ID: service_e3qqtcf

  //User ID: 6G_F_yg7CUVy-kc9W

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <main
        className="
          container
          relative
          w-[90vw]
          h-[85vh]
          border
          border-green-500/40
          rounded-lgfont-mono
          text-green-400
          shadow-[0_0_25px_rgba(0,255,128,0.15)]
          overflow-y-auto
          terminal-scroll
        "
      >
        <script src="myJS/gsap.min.js"></script>
        <NewLanding />
        <NavBar />
        <Projects />
      </main>
    </div>
  );
}
