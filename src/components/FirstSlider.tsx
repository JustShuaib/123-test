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
    partialVisibilityGutter: 40,
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
    <section className="pl-16 pb-20 mt-36 grid gap-x-12 items-center grid-cols-5">
      <div className="col-span-2 relative">
        <div className="absolute -top-[95%] right-20">
          <Arrow />
        </div>
        <div className="text-text pr-14">
          <h2 className="font-bai-jamjuree font-medium text-4xl">
            Explore by Categories
          </h2>
          <p className="font-medium mr-14 text-base my-4">
            Browse our categories and find the right talents that matches the
            job you want to get done.
          </p>
          <button className="bg-primary text-base font-poppins text-white font-medium py-4 px-7 rounded-20">
            See all Categories
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <Carousel
          showDots={true}
          infinite={true}
          partialVisible={true}
          responsive={responsive}
          keyBoardControl={true}
          containerClass="pb-8"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-4"
        >
          {services.map(({ title, desc, img, smImg }, index) => (
            <div className="relative" key={index}>
              <img src={img} alt={title} />
              <div className="text-white absolute pl-6 bottom-6 h-1/4">
                <p className="font-bai-jamjuree font-medium text-2xl">
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
