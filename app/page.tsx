import Image from "next/image";
import NavBar from "./components/navBar";
import Modal from "./components/modal";
import Heading from "./components/heading";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  //Template ID: template_2tit16r

  //Service ID: service_e3qqtcf

  //User ID: 6G_F_yg7CUVy-kc9W
  
  return (
    <div>
      <section id="landing-page">
        <NavBar />
        <Heading />
        <a href="#">
          <button className="mail__btn click">
            <IoMdMail className="fa-solid fa-envelope" />
          </button>
        </a>
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <Modal />
      </section>
      <Projects />
      <Footer />
    </div>
  );
}
