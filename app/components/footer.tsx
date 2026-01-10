export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__logo">
            <i className="fa-sharp fa-solid fa-b"></i>
            <i className="fa-sharp fa-solid fa-b"></i>
          </div>
          <div className="footer__social--list">
            <a
              href="https://github.com/broadaciousb"
              target="_blank"
              className="footer__social--link
          link__hover-effect
          link__hover-effect--white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/broady-butler-ei-8069aa173/"
              target="_blank"
              className="footer__social--link
          link__hover-effect
          link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="footer__social--link
          link__hover-effect
          link__hover-effect--white"
            >
              Contact
            </a>
            <a
              href="./assets/Broady Butler Resume 6.pdf"
              target="_blank"
              className="footer__social--link
          link__hover-effect
          link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright © 2024 Broady Butler
          </div>
        </div>
      </div>
    </footer>
  );
}
