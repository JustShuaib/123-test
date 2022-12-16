import { ReactComponent as Logo } from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="py-6 px-16 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Logo />
        <button
          type="button"
          className="text-primary font-bai-jamjuree py-2.5 px-5 font-medium rounded-16 border-2 border-primary"
        >
          Post a job
        </button>
      </div>
      <div className="flex font-bai-jamjuree items-center text-nav-text">
        <ul className="flex gap-5 items-center">
          <li>
            <a href="#">Tasks</a>
          </li>
          <li>
            <a href="#">Discover Service Providers</a>
          </li>
          <li>
            <a href="#">How it Works</a>
          </li>
        </ul>
        <ul className="flex border-l items-center pl-5 ml-5 border-l-primary gap-5 text-primary">
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li className="rounded-16 bg-primary text-white font-medium py-3 px-5">
            <a href="#">Provide a Service</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
