import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgGroup from "../assets/img-group.png";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const SecondSlider = () => {
  return (
    <>
      <section className="relative overflow-x-clip bg-light-red pb-10 pt-14">
        <div className="absolute -top-16 left-1/2 h-24 w-[110%] -translate-x-1/2 rounded-bl-[50%] rounded-br-[50%] bg-main-bg md:rounded-br-[100%] md:rounded-bl-[100%]"></div>
        <h3 className="mt-6 mb-10 text-center font-bai-jamjuree text-xl font-semibold text-text md:mb-12 md:text-4xl">
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
          containerClass="pb-10 md:pb-12"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-8 md:px-4 md:first:ml-24"
        >
          {sliderDetails.map(
            (
              { type, open, title, loc, time, price, star, img, smImg },
              index
            ) => (
              <div
                key={index}
                className="relative h-[350px] rounded-25 bg-cover bg-center bg-no-repeat md:h-[330px]"
                style={{ backgroundImage: `url(${img})` }}
              >
                <span
                  className={`absolute top-3 left-5 rounded-[50px] px-3 py-1 text-xs capitalize md:text-sm ${
                    open ? "bg-white text-text" : "bg-primary text-white"
                  }`}
                >
                  {open ? "open" : "engaged"}
                </span>

                <div className="absolute bottom-4 left-1/2 w-11/12 -translate-x-1/2 rounded-25 bg-white p-3.5 md:p-5">
                  <div
                    style={{ backgroundImage: `url(${img})` }}
                    className={`absolute -top-8 right-6 rounded-full p-2 md:-top-10 md:right-8 ${
                      index === 0 ? "bg-center" : "bg-right-top"
                    }`}
                  >
                    <img
                      src={smImg}
                      alt={title}
                      className="w-12 rounded-full md:w-auto"
                    />
                  </div>
                  <p className="text-xs font-medium text-primary md:text-sm">
                    {type}
                  </p>
                  <p className="font-bai-jamjuree text-base font-semibold text-ltext md:text-lg">
                    {title}
                  </p>
                  <p className="my-2 flex items-center gap-x-1 text-xs text-ltext md:text-sm">
                    <Location />
                    <span>{loc}</span>
                  </p>
                  <p className="my-2 flex items-center gap-x-1 text-xs text-ltext md:text-sm">
                    <Clock />
                    <span>{time}</span>
                  </p>
                  <p className="font-bai-jamjuree text-base font-semibold md:text-lg">
                    {price}
                  </p>
                  <div className="flex items-center justify-between text-primary">
                    <span className="flex items-center gap-x-1">
                      <Star />
                      <span className="mt-1 text-sm">{star}</span>
                    </span>
                    <button className="flex items-center gap-x-1.5 text-sm md:text-base">
                      Details <Right />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>

        <button className="mx-auto mt-6 block w-52 rounded-20 bg-primary py-3.5 font-poppins text-sm font-medium text-white md:mb-28 md:mt-10 md:w-64 md:py-5 md:text-lg">
          Post your own task
        </button>
      </section>

      <section className="mb-[800px] grid gap-16 md:mb-52 md:grid-cols-2 md:gap-10">
        <div className="rounded-br-128 bg-light-red pb-36 pt-10 pl-8 md:-mr-40 md:h-[85%] md:pt-20 md:pb-0 md:pr-56 md:pl-28">
          <div className="pr-8 text-text md:pr-10">
            <h2 className="font-bai-jamjuree text-2xl font-medium md:text-5xl">
              Become a Service Provider and start
              <span className="text-primary"> earning </span>
              today!
            </h2>
            <p className="my-4 text-sm font-medium md:my-6 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              convallis fusce nulla tincidunt sem iaculis. Amet velit etiam
              nisi.
            </p>
            <button className="rounded-16 bg-primary py-2.5 px-8 font-poppins text-base font-medium text-white md:rounded-20 md:py-4 md:px-12 md:text-lg">
              Start Earning
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={imgGroup}
            alt="imgGroup"
            className="relative -top-10 max-h-full"
          />
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
