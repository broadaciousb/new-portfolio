"use client";

import { IoMdClose } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Modal() {
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

  return (
    <div className="modal text-white rounded-md border border-green-500/40 rounded-lgfont-mono">
      <button className="cursor-pointer modal__exit fixed top-[24px] right-[24px]">
        <GiExitDoor className="w-[48px] h-[42px] md:w-[60px] md:h-[60px] text-green-400"/>
      </button>
      <div className="modal__wrapper px-[12px] pt-[48px] mx-auto">
        <div className="modal__title text-center text-green-400 text-[32px] lg:text-[48px] pb=[4px] lg:pb-[12px] pt-[24px] md:pt-[0]">
          _______________
        </div>
        <div className="modal__sub-title text-center text-green-400 text-[16px] sm:text-[24px] lg:text-[32px] pb=[4px] lg:pb-[12px]">
          _______________
        </div>
        <div className="modal__sub-title-2 text-center text-green-400 text-[16px] sm:text-[24px] lg:text-[32px]">
          _______________
        </div>
        <form className="mt-6 space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="text-green-400 text-sm">
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              className="rounded-md border border-green-500/40 bg-transparent p-2 text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="text-green-400 text-sm">
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              className="rounded-md border border-green-500/40 bg-transparent p-2 text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-green-400 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="rounded-md border border-green-500/40 bg-transparent p-2 text-white focus:outline-none focus:border-green-400"
            />
          </div>
          <div className="button__wrapper flex justify-center w-full">
            <button
              id="contact__submit"
              className="form__submit cursor-pointer w-full max-w-[240px] text-green-400 border border-green-500/40 text-[20px] py-[12px] px-[24px] hover:bg-green-500/40 hover:text-black"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
