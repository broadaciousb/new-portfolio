"use client";

import { IoMdClose } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import React, { FormEvent, useEffect, useState, useRef } from "react";
import { toggleModal } from "../redux/ToggleModalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import emailjs from "@emailjs/browser";
import ContactForm from "./contactForm";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Modal() {
  const loading = useAppSelector((state) => state.loading.loading);

  useEffect(() => {
    const tl = gsap.timeline({
      id: "text-scramble",
      defaults: { ease: "none" },
    });

    tl.to(".modal__title", {
      duration: 1,
      scrambleText: "I would love to chat with you.",
    })
      .to(".modal__sub-title", {
        duration: 1,
        scrambleText: "Feel free to send me a message.",
      })
      .to(".modal__sub-title-2", {
        duration: 1,
        scrambleText: "I am open to new opportunities",
      });
  }, []);

  const dispatch = useAppDispatch();

  return (
    <div className="modal text-white rounded-md border border-green-500/40 rounded-lgfont-mono">
      <button
        onClick={() => {
          dispatch(toggleModal());
        }}
        className="click cursor-pointer modal__exit fixed top-[24px] right-[24px]"
      >
        <GiExitDoor className="w-[48px] h-[42px] md:w-[60px] md:h-[60px] text-green-400 hover:text-green-400/70" />
      </button>
      <div className="modal__wrapper px-[12px] pt-[48px] mx-auto">
        {!loading ? (
          <>
            <div className="modal__title text-center text-green-400 text-[24px] md:text-[32px] lg:text-[48px] pb=[4px] lg:pb-[12px] pt-[24px] md:pt-[0]">
              _______________
            </div>
            <div className="modal__sub-title text-center text-green-400 text-[16px] sm:text-[24px] lg:text-[32px] pb=[4px] lg:pb-[12px]">
              _______________
            </div>
            <div className="modal__sub-title-2 text-center text-green-400 text-[16px] sm:text-[24px] lg:text-[32px]">
              _______________
            </div>
            <ContactForm />
          </>
        ) : (
          <div className="loading__wrapper flex items-center justify-center w-full h-full">
            <div className="text-6xl text-green-400">{"[ Loading ]"}</div>
          </div>
        )}
      </div>
    </div>
  );
}
