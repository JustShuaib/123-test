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
  return (
    <section className="mt-36 grid items-center gap-12 pb-20 md:grid-cols-5 md:pl-16">
      <div className="relative w-screen md:w-auto px-8 md:px-0 col-span-2">
        <Arrow className="absolute -top-40 left-16 w-28 md:-top-[95%] md:right-20 md:w-auto" />
        <div className="md:pr-14 text-text">
          <h2 className="font-bai-jamjuree text-3xl font-medium md:text-4xl">
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

      <div className="w-screen md:w-auto col-span-3">
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
            <div className="relative" key={index}>
              <img src={img} alt={title} />
              <div className="absolute  md:bottom-8 bottom-6 h-1/4 text-white p-4 md:pl-6">
                <p className="text-lg font-bai-jamjuree font-medium md:text-2xl">
                  {title}
                </p>
                <p className="font-mulish">{desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FirstSlider;
