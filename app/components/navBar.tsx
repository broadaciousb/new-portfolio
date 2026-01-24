export default function NavBar() {
  return (
    <nav className="sticky top-0 z-100 bg-black w-full items-center font-mono text-green-400 text-4xl">
      <div className="nav__wrapper flex justify-between w-full h-[120px] px-[24px] items-center bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:100%_3px]">
        <a href="" className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          Projects
        </a>
        <a href="" className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          About Me
        </a>
        <a href="" className="nav-link border border-green-500/40 rounded-lg p-[12px] hover:bg-green-500/40 hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  );
}
