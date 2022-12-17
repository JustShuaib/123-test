import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import NavLinks from "./NavLinks";

const Btn = () => (
  <button
    type="button"
    className="rounded-16 border border-primary py-2.5 px-7 font-bai-jamjuree font-medium text-primary md:border-2 md:px-5"
  >
    Post a job
  </button>
);

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-7 md:hidden">
        <div className="flex basis-full items-center justify-between md:hidden">
          <Logo />
          <button
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            aria-label="toggle mobile navigation menu"
            className="z-20 flex flex-col items-end transition-all duration-700 ease-in-out"
          >
            <span
              className={`my-1 h-px bg-primary transition-all duration-300 ease-linear ${
                navOpen ? "w-8 rotate-45" : "w-9"
              }`}
            ></span>
            <span
              className={`my-1 h-px bg-primary transition-all duration-300 ease-linear ${
                navOpen ? "relative -top-2 w-8 -rotate-45" : "w-6"
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`fixed left-0 top-0 z-10 min-h-screen w-full bg-main-bg bg-opacity-20 backdrop-blur-sm transition-all duration-500 ${
            navOpen ? "translate-x-0" : "translate-x-[100rem]"
          }`}
        >
          <div
            className={`fixed right-0 min-h-screen w-4/5 flex-col items-center justify-center gap-x-6 bg-main-bg text-sm ${
              navOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center gap-y-8">
              <Btn />
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>

      <nav className="hidden items-center justify-between py-6 px-8 md:flex md:px-16">
        <div className="flex items-center gap-8">
          <Logo />
          <Btn />
        </div>
        <NavLinks />
      </nav>
    </>
  );
};

export default Nav;
