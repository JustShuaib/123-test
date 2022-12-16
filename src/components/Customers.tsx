import { ReactComponent as Star } from "../assets/star.svg";
import eze from "../assets/eze.png";
import jibike from "../assets/jibike.png";
import dam from "../assets/dam.png";
import nne from "../assets/nne.png";
import ade from "../assets/ade.png";
const reviews = [
  {
    name: "Eze Chinedu",
    img: eze,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
  },
  {
    name: "Adebanji Bolaji",
    img: ade,
    comment:
      "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
  },
  {
    name: "Damilare Usman",
    img: dam,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
  },
  {
    name: "Adebanji Bolaji",
    img: ade,
    comment:
      "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
  },
  {
    name: "Jibike Alarape",
    img: jibike,
    comment:
      "Amet adipiscing pellentesque nisl urna malesuada vulputate sed volutpat gravida. In non massa lectus feugiat. Et lectus augue vitae porttitor ut pulvinar ultricies donec. Pharetra diam vel est tempus amet vitae eget egestas dolor. Tempor urna facilisi posuere sit. A semper tortor viverra id.",
  },
  {
    name: "Nneka Chukwu",
    img: nne,
    comment:
      "Amet adipiscing pellentesque nisl urna malesuada vulputate sed volutpat gravida. In non massa lectus feugiat. Et lectus augue vitae porttitor ut pulvinar ultricies donec. Pharetra diam vel est tempus amet vitae eget egestas dolor. Tempor urna facilisi posuere sit. A semper tortor viverra id.",
  },
  {
    name: "Adebanji Bolaji",
    img: ade,
    comment:
      "Nulla pellentesque ultricies facilisi mi nibh. Vitae venenatis elit diam a. Magna consectetur sit sit nisi a at. Neque vulputate nunc vulputate habitant fermentum vulputate magnis tortor.",
  },
  {
    name: "Damilare Usman",
    img: dam,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
  },
  {
    name: "Eze Chinedu",
    img: eze,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.",
  },
];
const Customers = () => {
  return (
    <section className="px-16 mb-20">
      <h3 className="font-bai-jamjuree font-semibold text-center text-2xl text-text mt-6 mb-10">
        Our Customers love what we do.
      </h3>
      <div className="grid overflow-y-clip grid-cols-3 items-start gap-8">
        <div className="grid grid-flow-row -translate-y-24 grid-cols-1 gap-8">
          {reviews.slice(0, 3).map(({ name, comment, img }, index) => (
            <div key={index} className="bg-white grid rounded-24 p-4">
              <div className="flex gap-x-2 mb-2 items-center">
                <img src={img} alt={name} />
                <p className="font-bai-jamjuree font-medium text-lg">{name}</p>
              </div>
              <div className="flex gap-x-1 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    <Star />
                  </span>
                ))}
              </div>
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-flow-row items-center grid-cols-1 gap-8">
          {reviews.slice(4, 6).map(({ name, comment, img }, index) => (
            <div key={index} className="bg-white h-full rounded-24 p-4">
              <div className="flex gap-x-2 mb-2 items-center">
                <img src={img} alt={name} />
                <p className="font-bai-jamjuree font-medium text-lg">{name}</p>
              </div>
              <div className="flex gap-x-1 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    <Star />
                  </span>
                ))}
              </div>
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-flow-row grid-cols-1 -translate-y-32 gap-8">
          {reviews.slice(6).map(({ name, comment, img }, index) => (
            <div key={index} className="bg-white  rounded-24 p-4">
              <div className="flex gap-x-2 mb-2 items-center">
                <img src={img} alt={name} />
                <p className="font-bai-jamjuree font-medium text-lg">{name}</p>
              </div>
              <div className="flex gap-x-1 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    <Star />
                  </span>
                ))}
              </div>
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
