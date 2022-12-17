import { ReactComponent as Logo } from "../assets/logo-white.svg";
const Footer = () => {
  return (
    <footer className="relative overflow-x-clip bg-primary px-6 text-white md:px-16">
      <div className="absolute left-1/2 -top-24 -z-10 h-44 w-[120%] -translate-x-1/2 rounded-tl-[50%] rounded-tr-[50%] bg-primary md:rounded-tr-[100%] md:rounded-tl-[100%]"></div>

      <div className="mx-auto flex flex-col items-center md:w-1/2 md:justify-center md:px-4">
        <Logo />
        <p className="my-5 text-center font-bai-jamjuree text-lg font-medium tracking-tight md:text-2xl">
          We connect people looking to get their to-do list done with people
          looking to make extra cash.
        </p>
        <ul
          role="group"
          className="mb-10 flex items-center justify-center gap-x-4"
        >
          {["Post job", "Provide a Service"].map((item, index) => (
            <li key={index}>
              <button
                type="button"
                className="rounded-16 bg-btn-sec py-3 px-6 font-poppins text-sm font-medium text-primary"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto h-px w-[87%] bg-white bg-opacity-20"></div>
      <ul className="my-4 flex flex-wrap items-center justify-center gap-x-8 md:my-6 md:gap-x-16">
        {[
          "Post a Task",
          "Browse Jobs",
          "Services",
          "Find Talent",
          "Contact us",
        ].map((item, index) => (
          <li key={index}>
            <a href="#" className="text-sm font-medium text-white md:text-base">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-px bg-white bg-opacity-20"></div>
      <div className="flex items-center justify-between py-6 text-sm font-medium text-btn-sec md:px-4 md:text-base">
        <span>&copy; {new Date().getFullYear()} Truelocal</span>
        <div className="flex items-center gap-x-4">
          <span>Privacy & Cookies</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
