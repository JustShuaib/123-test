import { ReactComponent as Logo } from "../assets/logo-white.svg";
const Footer = () => {
  return (
    <footer
      style={{
        // borderRadius: "40%/50% 30% 0 0",
        // borderRadius: "65%/180px 35%/200px 0 0",
        // borderRadius: "100% 100% 5% 5% / 28% 30% 5% 5%",
        // borderRadius: "75% 85% 0% 0% / 30% 20% 0% 0%",
        borderRadius: "80% 81% 0% 0% / 21% 16% 0% 0%",
      }}
      className="bg-primary px-14 pt-14 text-white"
    >
      <div className="flex flex-col px-4 justify-center items-center w-1/2 mx-auto">
        <Logo />
        <p className="font-bai-jamjuree tracking-tight font-medium text-center text-2xl my-5">
          We connect people looking to get their to-do list done with people
          looking to make extra cash.
        </p>
        <ul
          role="group"
          className="flex items-center justify-center gap-x-4 mb-10"
        >
          {["Post job", "Provide a Service"].map((item, index) => (
            <li key={index}>
              <button
                type="button"
                className="bg-btn-sec text-primary rounded-16 py-3 px-6 font-poppins font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-px bg-white bg-opacity-20 w-[87%] mx-auto"></div>
      <ul className="flex items-center justify-center gap-x-16 my-6">
        {[
          "Post a Task",
          "Browse Jobs",
          "Services",
          "Find Talent",
          "Contact us",
        ].map((item, index) => (
          <li key={index}>
            <a href="#" className="text-white font-medium text-base">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-px bg-white bg-opacity-20"></div>
      <div className="py-6 flex justify-between items-center text-btn-sec px-4 font-medium">
        <span>&copy; {new Date().getFullYear()} Truelocal</span>
        <div className="gap-x-4 flex items-center">
          <span>Privacy & Cookies</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
