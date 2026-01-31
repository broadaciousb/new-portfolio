"use client"; // Marks this component as a Client Component

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { startLoading, stopLoading } from "../redux/LoadingSlice";
import { useAppDispatch } from "../redux/hooks";
import { toggleModal } from "../redux/ToggleModalSlice";
const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

 const dispatch = useAppDispatch();

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    dispatch(startLoading());
    
    try {
      await emailjs.sendForm(
        "service_e3qqtcf",
        "template_2tit16r",
        form.current,
        {publicKey: "6G_F_yg7CUVy-kc9W"},
      );
      console.log("SUCCESS!");
      alert("Message sent successfully!");
    } catch (error: any) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    }
    dispatch(stopLoading());
    dispatch(toggleModal());
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="user_name" className="text-green-400 text-sm">
            Name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            className="rounded-md border border-green-500/40 bg-transparent p-2 text-green-400 focus:outline-none focus:border-green-400"
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
            className="rounded-md border border-green-500/40 bg-transparent p-2 text-green-400 focus:outline-none focus:border-green-400"
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
            className="rounded-md border border-green-500/40 bg-transparent p-2 text-green-400 focus:outline-none focus:border-green-400"
          />
        </div>
        <div className="button__wrapper flex justify-center w-full">
          <button
            id="contact__submit"
            type="submit"
            className="form__submit cursor-pointer w-full max-w-[240px] text-green-400 border border-green-500/40 text-[20px] py-[12px] px-[24px] hover:bg-green-500/40 hover:text-black"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
