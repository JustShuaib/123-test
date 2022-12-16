import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import slide1 from "../assets/mec.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import half1 from "../assets/half1.png";
import half2 from "../assets/half2.png";
import slide1Small from "../assets/round1.png";
import slide2Small from "../assets/round2.png";
import slide3Small from "../assets/round3.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const SecondSlider = () => {
  return (
    <>
      <section className="py-10 bg-light-red">
        <h3 className="font-bai-jamjuree font-semibold text-center text-2xl text-text mt-6 mb-10">
          See what
          <span className="text-primary"> people </span>
          are getting done
        </h3>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          partialVisible={true}
          responsive={responsive}
          keyBoardControl={true}
          containerClass="pb-12"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-4 first:ml-16"
        >
          {sliderDetails.map(
            (
              { type, open, title, loc, time, price, star, img, smImg },
              index
            ) => (
              <div
                key={index}
                className="rounded-25 bg-center relative bg-no-repeat bg-cover h-[370px]"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <span
                  className={`absolute top-3 px-3 py-1 left-5 text-sm capitalize rounded-[50px] ${
                    open ? "bg-white text-text" : "bg-primary text-white"
                  }`}
                >
                  {open ? "open" : "engaged"}
                </span>

                <div className="bg-white absolute bottom-4 p-5 w-11/12 left-1/2 -translate-x-1/2 rounded-25">
                  <div
                    // style={{ clipPath: "circle(80%)" }}
                    className="absolute -top-10 right-6 p-2 z-10 rounded-full"
                  >
                    <img src={smImg} alt={title} className="rounded-full" />
                  </div>
                  <p className="text-primary text-sm font-medium">{type}</p>
                  <p className="text-ltext font-bai-jamjuree font-semibold text-lg">
                    {title}
                  </p>
                  <p className="text-ltext flex items-center gap-x-1 text-sm my-2">
                    <Location />
                    <span>{loc}</span>
                  </p>
                  <p className="text-ltext flex items-center gap-x-1 text-sm my-2">
                    <Clock />
                    <span>{time}</span>
                  </p>
                  <p className="font-bai-jamjuree font-semibold text-lg">
                    {price}
                  </p>
                  <div className="flex items-center justify-between text-primary">
                    <span className="flex items-center gap-x-1">
                      <Star />
                      <span className="text-sm mt-1">{star}</span>
                    </span>
                    <button className="flex items-center gap-x-1.5">
                      Details <Right />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>

        <button className="bg-primary text-base font-poppins text-white font-medium py-4 mb-16 mt-10 rounded-20 mx-auto block w-52">
          Post your own task
        </button>
      </section>
      <section className="grid grid-cols-2 gap-x-10">
        <div className="pr-56 rounded-br-128 -mr-40 pl-16 py-36 bg-light-red">
          <div className="text-text pr-10">
            <h2 className="font-bai-jamjuree font-medium text-4xl">
              Become a Service Provider and start
              <span className="text-primary"> earning </span>
              today!
            </h2>
            <p className="font-medium text-base my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              convallis fusce nulla tincidunt sem iaculis. Amet velit etiam
              nisi.
            </p>
            <button className="bg-primary text-base font-poppins text-white font-medium py-3.5 px-7 rounded-20">
              Start Earning
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={slide2} alt="slide2" className="absolute h-[437px] -top-2 w-96" />
          <img src={half1} alt="half1" className="absolute right-0 top-60 h-96" />
          <img src={half2} alt="half2" className="absolute right-0 top-0" />
        </div>
      </section>
    </>
  );
};
const sliderDetails = [
  {
    open: true,
    type: "Repairs & Maintenance",
    title: "Fix my faucet and mixers",
    loc: "Physical - Ketu, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "₦50,000",
    star: "4.0",
    img: slide1,
    smImg: slide1Small,
  },
  {
    open: true,
    type: "IT Services",
    title: "Landing page for my product",
    loc: "Remote",
    time: "Flexible",
    price: "No budget yet",
    star: "4.0",
    img: slide2,
    smImg: slide2Small,
  },
  {
    open: false,
    type: "IT Services",
    title: "Experienced toyota mechanic",
    loc: "Physical - VI, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "No budget yet",
    star: "4.0",
    img: slide3,
    smImg: slide3Small,
  },
  {
    open: true,
    type: "Repairs & Maintenance",
    title: "Fix my faucet and mixers",
    loc: "Physical - Ketu, Lagos",
    time: "Sun, 20th Feb 2022 - Anytime",
    price: "₦50,000",
    star: "4.0",
    img: slide1,
    smImg: slide1Small,
  },
];
export default SecondSlider;
