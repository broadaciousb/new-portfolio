import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export default function Heading() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title purple">I'm Broady</h1>
        <p className="header__para">
          I'm a <b className="purple">Frontend Software Engineer</b> with a
          strong passion for building web applications with great user
          experiences.
          <br />
          Here's a bit more <b className="purple click">about me.</b>
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/broady-butler-ei-8069aa173/"
            target="_blank"
            className="social__link click"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/broadaciousb"
            target="_blank"
            className="social__link click"
          >
            <FaGithub />
          </a>
          <a
            href="/assets/Broady Butler Resume.pdf"
            target="_blank"
            className="social__link click"
          >
            <FaFilePdf />
          </a>
        </div>
      </div>
    </header>
  );
}
