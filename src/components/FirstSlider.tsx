import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import itImg from "../assets/it.png";
import maintImg from "../assets/maint.png";
import healthImg from "../assets/health.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const FirstSlider = () => {
  const services = [
    {
      title: "IT Services",
      img: itImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: healthImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "IT Services",
      img: itImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Maintenance",
      img: maintImg,
      desc: "For software, web development, networking, programming, etc.",
    },
    {
      title: "Beauty & Health",
      img: healthImg,
      desc: "For software, web development, networking, programming, etc.",
    },
  ];

  useEffect(() => {
    const imagesContainer = document.querySelectorAll(".carouselItem");
    imagesContainer.forEach((container) => {
      container.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        // const target = e.currentTarget as HTMLDivElement;
        // if (target === container) {
        //   const img = target?.querySelector("img");
        //   img?.getAttribute("data-image") === img?.getAttribute("src")
        //     ? img?.setAttribute("src", img?.getAttribute("data-sm-image") || "")
        //     : img?.setAttribute("src", img?.getAttribute("data-image") || "");
        // }
      });
    });

    return () => {};
  }, []);

  return (
    <section className="mt-44 grid items-center gap-12 pb-20 md:grid-cols-5 md:pl-20">
      <div className="relative col-span-2 w-screen px-8 md:w-auto md:px-0">
        <div className="text-text md:pr-14">
          <h2 className="font-bai-jamjuree text-2xl font-medium md:text-5xl">
            Explore by Categories
          </h2>
          <p className="my-4 text-base font-medium md:mr-14 md:text-lg">
            Browse our categories and find the right talents that matches the
            job you want to get done.
          </p>
          <button className="rounded-20 bg-primary px-7 py-3.5 font-poppins text-sm font-medium text-white md:py-5 md:px-9 md:text-base">
            See all Categories
          </button>
        </div>
      </div>

      <div className="col-span-3 w-screen md:w-auto">
        <Carousel
          showDots={true}
          partialVisible={true}
          responsive={responsive}
          // keyBoardControl={true}
          // autoPlay={true}
          // autoPlaySpeed={3000}
          // infinite={true}
          containerClass="pb-8"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // TODO: Move the dots to the center
          dotListClass="custom-dot-list-style --first-slider"
          itemClass="px-4"
        >
          {services.map(({ title, desc, img }, index) => (
            <div className="flex justify-start" key={index}>
              <button type='button' className="carouselItem bg-red-400 z-10 relative w-[300px] transition-all">
                <img
                  src={img}
                  className="h-72"
                  alt={title}
                />

                <div className="absolute bottom-6 w-full p-4 text-white md:pl-6">
                  <p className="rotate-180 font-bai-jamjuree text-lg font-medium [writing-mode:vertical-lr] md:text-xl">
                    {title}
                  </p>
                  <p className="hidden font-mulish">{desc}</p>
                </div>
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FirstSlider;
