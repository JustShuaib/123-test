import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import slide1 from "../assets/mec.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide1Small from "../assets/round1.png";
import slide2Small from "../assets/round2.png";
import slide3Small from "../assets/round3.png";
import Button from "./Button";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
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
      <section className="my-10">
        <h3 className="font-bai-jamjuree font-semibold text-center text-2xl text-text my-6">
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
          containerClass="ml-16 pb-12"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-4"
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
                  <div className="absolute -top-10 right-6 p-2 bg-transparent z-10 rounded-full">
                    <img src={smImg} className="rounded-full" />
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

        <button className="bg-primary text-base font-poppins text-white font-medium py-4 my-6 rounded-20 mx-auto block w-52">
          Post your own task
        </button>
      </section>
      <section></section>
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
