import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Play } from "../assets/play.svg";

import banner from "../assets/banner.png";
const Header = () => {
  return (
    <>
      <div className="grid grid-cols-5 items-center pl-16">
        <header className="col-span-2 pr-10">
          <h1 className="text-text font-medium text-5xl font-bai-jamjuree">
            Get
            <span className="text-primary"> Plumbing </span>
            done on your own terms
          </h1>
          <p className="text-lg font-poppins my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
            convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.
          </p>

          <label
            htmlFor="email"
            className="bg-white shadow-input rounded-25 flex items-center justify-between pl-4 p-2 -mr-32"
          >
            <div className="flex items-center justify-start gap-6">
              <Mail />
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="placeholder:text-[#777777] font-poppins py-3 pr-9 text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-base font-poppins text-white font-medium py-4 px-7 rounded-20"
            >
              Get Started
            </button>
          </label>
          <button className="mt-10 ml-4 flex items-center gap-x-2 font-bold">
            <Play />
            <span>See how it works</span>
          </button>
        </header>
        <div className="col-span-3 -z-10">
          <img src={banner} alt="banner" />
        </div>
      </div>

      <div className="flex justify-center font-inter mt-14 items-center">
        <span className="text-primary text-base font-medium">Everything is easy!</span>
        <ol className="text-text flex items-center gap-x-14 ml-14">
          {[
            "Post a Task",
            "Set your budget or not",
            "Receive quotes & pick the best provider",
          ].map((item, index) => (
            <li key={index}>
              <span className="bg-primary font-bai-jamjuree rounded-full text-white w-9 h-9 inline-flex mr-2 items-center justify-center">
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
