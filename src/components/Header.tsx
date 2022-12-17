import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Play } from "../assets/play.svg";

import banner from "../assets/banner.png";
const Header = () => {
  return (
    <>
      <div className="grid items-center md:grid-cols-5 md:pl-16">
        <header className="col-span-2 pl-4 pr-2 md:pr-10">
          <h1 className="text-center font-bai-jamjuree text-3xl font-medium text-text md:text-left md:text-5xl">
            Get
            <span className="text-primary"> Plumbing </span>
            done on your own terms
          </h1>
          <p className="my-5 font-poppins text-base text-text md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
            convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.
          </p>

          <label
            htmlFor="email"
            className="flex items-center justify-between rounded-25 bg-white p-2 shadow-input md:-mr-32 md:pl-4"
          >
            <div className="flex items-center justify-start gap-2 md:gap-6">
              <Mail />
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="py-1 font-poppins text-sm placeholder:text-[#777777] focus:outline-none md:py-3 md:pr-9 md:text-base"
              />
            </div>
            <button
              type="submit"
              className="min-w-max rounded-20 bg-primary px-3 py-2 font-poppins text-xs font-medium text-white md:min-w-fit md:px-7 md:py-4 md:text-base"
            >
              Get Started
            </button>
          </label>
          <button className="my-6 flex items-center gap-x-2 text-base font-bold text-ltext md:mt-10 md:ml-4 md:pb-0">
            <Play />
            <span>See how it works</span>
          </button>
        </header>
        <div className="w-full col-span-3 px-6 md:-z-10 md:px-0">
          <img src={banner} alt="banner" className="max-w-full" />
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center px-1 font-inter md:flex-row">
        <span className="mb-2 text-base font-medium text-primary md:mb-0">
          Everything is easy!
        </span>
        <ol className="flex flex-col items-center gap-y-1 text-sm text-text md:ml-14 md:flex-row md:gap-x-14 md:text-base">
          {[
            "Post a Task",
            "Set your budget or not",
            "Receive quotes & pick the best provider",
          ].map((item, index) => (
            <li key={index}>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full  bg-primary font-bai-jamjuree text-white md:h-10 md:w-10">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Header;
