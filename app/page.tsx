import Image from "next/image";
import NavBar from "./components/navBar";
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
        <div className="modal">
          <div className="modal__half modal__about">
            <h3 className="modal__title modal__title--about">
              Here's a bit about me
            </h3>
            <h4 className="modal__sub-title modal__sub-title--about">
              Frontend Software Engineer
            </h4>
            <p className="modal__para">
              I'm a 29 year old{" "}
              <b className="purple">frontend software engineer</b> with a
              passion for developing websites with great
              <b className="purple">user experiences.</b>
              <br />I currently work on extremely difficult engineering problems
              in the construction industry and pursuing a career change to{" "}
              <b className="purple">web development.</b>
            </p>
            <div className="modal__languages">
              <figure className="modal__language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  className="modal__language--img"
                  alt=""
                />
                <span className="language__name">HTML</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  className="modal__language--img"
                  alt=""
                />
                <span className="language__name">CSS</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  className="modal__language--img"
                  alt=""
                />
                <span className="language__name">JavaScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  className="modal__language--img"
                  alt=""
                />
                <span className="language__name">React</span>
              </figure>
            </div>
          </div>
          <div className="modal__half modal__contact">
            <i className="fas fa-times modal__exit click click"></i>
            <h3 className="modal__title modal__title--contact">
              Let's have a chat!
            </h3>
            <h4 className="modal__sub-title modal__sub-title--contact">
              I'm currently open to new opportunities.
            </h4>
            <form id="contact__form">
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">E-mail</label>
                <input
                  className="input"
                  name="user_email"
                  type="email"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea className="input" name="message" required></textarea>
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">
              <i className="fas fa-spinner"></i>
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Footer />
    </div>
  );
}
