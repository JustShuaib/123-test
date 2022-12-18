import { useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener("load", createObserver);
    return () => {
      window.removeEventListener("load", createObserver);
    };
  }, []);

  const createObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = entry.target.querySelector("img");
          const firstParagraph =
            entry.target.querySelector(".font-bai-jamjuree");
          const secondParagraph = entry.target.querySelector(".font-mulish");
          if (entry.isIntersecting) {
            console.log("TEST");
            img?.setAttribute("src", img?.getAttribute("data-image") || "");
            firstParagraph?.classList.remove("rotate-180");
            firstParagraph?.classList.remove("[writing-mode:vertical-lr]");
            secondParagraph?.classList.remove("hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 100px 0px",
        threshold: 1.0,
      }
    );
    const imagesContainer = document.querySelectorAll(".carouselItem");
    imagesContainer.forEach((container) => {
      observer.observe(container);
    });
  };

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
            <div className="flex justify-start" key={index}>
              <div className="carouselItem relative w-[300px] transition-all">
                <img
                  data-image={img}
                  src={smImg}
                  className="h-72"
                  alt={title}
                />

                <div className="absolute bottom-6 w-full p-4 text-white md:pl-6">
                  <p className="rotate-180 font-bai-jamjuree text-lg font-medium [writing-mode:vertical-lr] md:text-xl">
                    {title}
                  </p>
                  <p className="hidden font-mulish">{desc}</p>
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
