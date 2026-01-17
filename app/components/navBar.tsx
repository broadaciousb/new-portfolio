export default function NavBar() {
  return (
    <nav className="sticky flex justify-center w-full my-[36px] items-center font-mono text-green-400 text-4xl">
      <div className="nav__wrapper flex justify-between w-full max-w-[1400px] items-center">
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
