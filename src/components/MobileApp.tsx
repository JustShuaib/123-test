import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as PlayStore } from "../assets/google.svg";
import appImg from "../assets/app.png";

const MobileApp = () => {
  return (
    <div className="mx-6 mb-32 mt-80 grid justify-between gap-6 rounded-36 bg-white md:mx-auto md:mt-44 md:w-2/3 md:grid-cols-2 md:gap-10 md:p-10 md:pr-0 md:pb-0">
      <div className="p-4 md:p-0">
        <p className="text-center font-bai-jamjuree text-3xl font-semibold text-text md:text-left md:text-4xl">
          Try the mobile App
        </p>
        <p className="mt-5 mb-10 text-base text-light-text md:text-lg">
          TrueLocal is available on Android and Iphones, download to have it at
          your fingertip.
        </p>
        <ul
          role="group"
          className="flex flex-col items-center gap-4 md:flex-row md:gap-6"
        >
          {["App Store", "Google Play"].map((item, index) => (
            <li key={index}>
              <button className="flex items-center gap-x-2 rounded-20 bg-primary py-3 px-12 font-poppins font-medium text-white md:gap-x-1 md:px-7">
                {item === "App Store" ? <Apple /> : <PlayStore />}
                <span className="text-sm">
                  Available on{" "}
                  <span className="block text-sm font-bold md:inline-block md:text-base">
                    {item}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-first -mt-20 flex justify-end md:-order-none">
        <img
          src={appImg}
          alt="Mobile App"
          className="h-[300px] md:h-[400px] md:rounded-br-36"
        />
      </div>
    </div>
  );
};

export default MobileApp;
