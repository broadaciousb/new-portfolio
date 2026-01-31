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
import Main from "./main";


export default function Home() {
  //Template ID: template_2tit16r

  //Service ID: service_e3qqtcf

  //User ID: 6G_F_yg7CUVy-kc9W

  return (
    <ReduxProvider>
      <Main />
    </ReduxProvider>
  );
}
