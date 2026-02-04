"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaLink, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    gsap.to(".projects__title", {
      duration: 1,
      scrambleText: "Here are some of my projects",
      scrollTrigger: {
        trigger: ".projects__title",
        scroller: ".container",
        start: "top 70%",
        once: true,
      },
    });
  }, []);

  return (
    <section id="projects" className="relative py-[120px]">
      <div className="pointer-events-none absolute" />
      <div className="py-6 px-6 sm:px-12">
        <div className="row">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center my-12">
            <div className="projects__title">________________</div>
          </h1>
          <ul className="project__list">
            <li className="project">
              <div className="project__wrapper rounded-md border border-green-500/40">
                <div className="project__wrapper--background"></div>
                <img
                  src="/assets/autoshops.png"
                  className="project__img w-full rounded-md opacity-80 grayscale contrast-125 rounded-md overflow-hidden"
                  alt=""
                />
                <div className="project__description px-12">
                  <h3 className="project__description--title text-green-400">
                    Autoshops.com
                  </h3>
                  <h4 className="project__description--sub-title text-green-300/70">
                    React, Material UI
                  </h4>

                  <p className="project__description--para text-green-400 mb-[12px]">
                    Autoshops.com is an early stage startup that connects
                    customers with local auto repair shops. The frontend of the
                    website is contructed with React and Material UI, a library
                    of pre-built React components. Authentication and data
                    presentation is handled by calling APIs that are connected
                    to a SQL database.
                  </p>
                  <div className="project__description--links">
                    <Link
                      href="https://www.autoshops.com/"
                      className="project__description--link click"
                    >
                      <FaLink className="project__link--icon text-green-400 hover:text-green-400/50" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper rounded-md border border-green-500/40">
                <div className="project__wrapper--background"></div>
                <img
                  src="/assets/summarist.png"
                  className="project__img w-full rounded-md opacity-80 grayscale contrast-125 rounded-md overflow-hidden"
                  alt=""
                />

                <div className="project__description px-12">
                  <h3 className="project__description--title text-green-400">
                    Summarist
                  </h3>
                  <h4 className="project__description--sub-title text-green-300/70">
                    Nextjs, TypeScript, Redux, Tailwind, Firebase
                  </h4>
                  <p className="project__description--para text-green-400 mb-[12px]">
                    A clone of a book subscription website where you can create
                    a profile, browse books to read or listen to, and with Swipe
                    implemented for subscription services. The site uses server
                    side rendering to improve performance when retrieving data
                    through API calls. Authentication and user data base needs
                    are handled with Firebase.
                  </p>
                  <div className="project__description--links flex">
                    <Link
                      href="https://github.com/broadaciousb/summarist-internship"
                      className="project__description--link mr-[16px] click"
                    >
                      <FaGithub className="project__link--icon text-green-400 hover:text-green-400/50" />
                    </Link>
                    <Link
                      href="https://summarist-internship-fawn.vercel.app/"
                      className="project__description--link mr-[16px] click"
                    >
                      <FaLink className="project__link--icon text-green-400 hover:text-green-400/50" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper rounded-md border border-green-500/40">
                <div className="project__wrapper--background"></div>
                <img
                  src="./assets/movie-site.png"
                  className="project__img w-full rounded-md opacity-80 grayscale contrast-125 rounded-md overflow-hidden"
                  alt=""
                />

                <div className="project__description px-12">
                  <h3 className="project__description--title text-green-400">
                    Movie Site
                  </h3>
                  <h4 className="project__description--sub-title text-green-300/70">
                    HTML, CSS, JavaScript, React
                  </h4>
                  <p className="project__description--para text-green-400 mb-[12px]">
                    A website where a user can search movie or TV show titles
                    and it returns multiple results collected from an API that
                    can be clicked on to see individual movie information. I
                    created all the React, HTML, CSS, and JavaScript code for
                    the website visual, loading states, and functionality.
                  </p>
                  <div className="project__description--links flex">
                    <Link
                      href="https://github.com/broadaciousb/movie-react-site"
                      className="project__description--link mr-[16px] click"
                    >
                      <FaGithub className="project__link--icon text-green-400 hover:text-green-400/50" />
                    </Link>
                    <Link
                      href="https://movie-react-site.vercel.app/"
                      className="project__description--link mr-[16px] click"
                    >
                      <FaLink className="project__link--icon text-green-400 hover:text-green-400/50" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper rounded-md border border-green-500/40">
                <div className="project__wrapper--background"></div>
                <img
                  src="./assets/fes-internship.png"
                  className="project__img w-full rounded-md opacity-80 grayscale contrast-125 rounded-md overflow-hidden"
                  alt=""
                />

                <div className="project__description px-12">
                  <h3 className="project__description--title text-green-400">
                    NFT Site
                  </h3>
                  <h4 className="project__description--sub-title text-green-300/70">
                    React, JavaScript
                  </h4>
                  <p className="project__description--para text-green-400 mb-[12px]">
                    A website that I forked from another repository provided to
                    me as a virtual internship, where all the CSS and HTML
                    existed. Through multiple branches and pull requests I
                    implemented carousels for different NFT sections and used
                    Axios to dynamically load NFT/artist data.
                  </p>
                  <div className="project__description--links flex">
                    <Link
                      href="https://github.com/broadaciousb/broady-internship"
                      className="project__description--link click"
                    >
                      <FaGithub className="project__link--icon text-green-400 mr-[16px] hover:text-green-400/50" />
                    </Link>
                    <Link
                      href="https://broady-internship.vercel.app/"
                      className="project__description--link click"
                    >
                      <FaLink className="project__link--icon text-green-400 mr-[16px] hover:text-green-400/50" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="project">
              <div className="project__wrapper rounded-md border border-green-500/40">
                <div className="project__wrapper--background"></div>
                <img
                  src="./assets/libraryReact.png"
                  className="project__img w-full rounded-md opacity-80 grayscale contrast-125 rounded-md overflow-hidden"
                  alt=""
                />

                <div className="project__wrapper w-full--background"></div>
                <div className="project__description px-12">
                  <h3 className="project__description--title text-green-400">
                    Book Store
                  </h3>
                  <h4 className="project__description--sub-title text-green-300/70">
                    HTML, CSS, JavaScript
                  </h4>
                  <p className="project__description--para text-green-400 mb-[12px]">
                    Educational project I worked on where an object of books and
                    and individual book info was used as an imitation of an API.
                    I wrote JavaScript functions to dynamically load movie data
                    like titles, prices, stars for ratings, cart items, and
                    totals.
                  </p>
                  <div className="project__description--links flex">
                    <Link
                      href="https://github.com/broadaciousb/library-react"
                      className="project__description--link click"
                    >
                      <FaGithub className="project__link--icon text-green-400 mr-[16px] hover:text-green-400/50" />
                    </Link>
                    <Link
                      href="https://library-react-53d28fe01db4.herokuapp.com/"
                      className="project__description--link click"
                    >
                      <FaLink className="project__link--icon text-green-400 mr-[16px] hover:text-green-400/50" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
