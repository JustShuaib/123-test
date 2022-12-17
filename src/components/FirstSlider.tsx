import { useState, useCallback, MouseEvent, TouchEvent } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReactComponent as Arrow } from "../assets/arrow.svg";
import itImg from "../assets/it.png";
import maintImg from "../assets/maint.png";
import healthImg from "../assets/health.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
    partialVisibilityGutter: 0,
  },
};

const FirstSlider = () => {
  const [isActive, setIsActive] = useState(false);
  // TODO: Don't know how to implement this yet
  const services = [
    {
      title: "IT Services",
      img: itImg,
      smImg: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: itImg,
      smImg: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: itImg,
      smImg: healthImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "IT Services",
      img: itImg,
      smImg: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: itImg,
      smImg: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: itImg,
      smImg: healthImg,
      desc: "For software, web development, networking, programming, etc.",
    },
  ];
  const checkIsActive = (e: MouseEvent | TouchEvent) => {
    const parentElement = e.currentTarget.parentElement?.parentElement;
    const isActive = parentElement?.classList.contains(
      "react-multi-carousel-item--active"
    );
    setIsActive(isActive ? true : false);
  };
  useCallback(() => {
    checkIsActive;
  }, []);

  return (
    <section className="mt-36 grid items-center gap-12 pb-20 md:grid-cols-5 md:pl-16">
      <div className="relative col-span-2 w-screen px-8 md:w-auto md:px-0">
        <Arrow className="absolute -top-40 right-20 w-28 md:-top-[95%] md:w-auto" />
        <div className="text-text md:pr-14">
          <h2 className="font-bai-jamjuree text-2xl font-medium md:text-4xl">
            Explore by Categories
          </h2>
          <p className="my-4 text-base font-medium md:mr-14">
            Browse our categories and find the right talents that matches the
            job you want to get done.
          </p>
          <button className="rounded-20 bg-primary px-7 py-3.5 font-poppins text-sm font-medium text-white md:py-4 md:text-base">
            See all Categories
          </button>
        </div>
      </div>

      <div className="col-span-3 w-screen md:w-auto">
        <Carousel
          showDots={true}
          partialVisible={true}
          responsive={responsive}
          keyBoardControl={true}
          containerClass="pb-8"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // TODO: Move the dots to the center
          dotListClass="custom-dot-list-style --first-slider"
          itemClass="px-4"
        >
          {services.map(({ title, desc, img, smImg }, index) => (
            <div className="flex justify-start bg-red-200" key={index}>
              <div className="relative bg-green-200">
                <img
                  onMouseMove={checkIsActive}
                  onTouchMove={checkIsActive}
                  // src={ isActive ? img : smImg}
                  src={index === 0 ? img : smImg}
                  className="h-80"
                  alt={title}
                />

                <div
                  className={`absolute w-full bg-yellow-700 p-4 text-white md:pl-6 ${
                    index === 0
                      ? "bottom-6 h-1/4 md:bottom-8"
                      : "bottom-6 h-full"
                  }`}
                >
                  <p
                    className={`font-bai-jamjuree bg-yellow-300 text-lg font-medium md:text-xl ${
                      index === 0 ? "rotate-0" : "-rotate-90"
                    }`}
                  >
                    {title}
                  </p>
                  <p
                    className={`font-mulish ${
                      index === 0 ? "block" : "hidden"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FirstSlider;
