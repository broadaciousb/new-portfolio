export default function NavBar() {
  return (
    <nav>
      <div id="personal-logo">BB</div>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a
            href="#"
            className="
          nav__link--anchor
          link__hover-element
          link__hover-effect
          link__hover-effect--black"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="
          nav__link--anchor
          link__hover-element
          link__hover-effect
          link__hover-effect--black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#"
            className="
          nav__link--anchor
          link__hover-element
          link__hover-effect
          link__hover-effect--black"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click">
          <a
            href="#"
            className="
          nav__link--anchor
          link__hover-element
          link__hover-effect
          link__hover-effect--black"
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
