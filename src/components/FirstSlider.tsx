import { ReactComponent as Arrow } from "../assets/arrow.svg";
import itImg from "../assets/it.png";
const FirstSlider = () => {
  return (
    <section className="pl-16 mt-44 grid items-center grid-cols-4">
      <div className="col-span-1 relative">
        <div className="absolute -top-[80%] right-20">
          <Arrow />
        </div>
        <div className="text-text pr-6">
          <h2 className="font-bai-jamjuree font-medium text-4xl">
            Explore by Categories
          </h2>
          <p className="font-medium text-base my-4">
            Browse our categories and find the right talents that matches the
            job you want to get done.
          </p>
          <button className="bg-primary text-base font-poppins text-white font-medium py-4 px-7 rounded-20">
            See all Categories
          </button>
        </div>
      </div>
      <div>
        <div className="relative">
          <img src={itImg} alt="IT Services" />
          <div className="text-white absolute pl-6 bottom-6 h-1/4">
            <p className="font-bai-jamjuree font-medium text-2xl">
              IT Services
            </p>
            <p className="font-mulish">
              For software, web development, networking, programming, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSlider;
