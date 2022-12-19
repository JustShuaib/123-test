import rightSide from "../assets/right-side.png";
const Question = () => {
  return (
    <div className="mb-[600px] grid md:mb-64 md:grid-cols-2 md:gap-32 md:pl-20">
      <section>
        <h3 className="mt-6 mb-10 text-center font-bai-jamjuree text-2xl font-semibold text-text md:text-left md:text-4xl">
          Have a question? <br /> We are ready to assist
        </h3>
        <form className="flex flex-col items-start gap-y-4 px-8 md:w-10/12 md:gap-y-8 md:px-0">
          <input
            className="w-full border-b border-[#AAAA] bg-transparent p-3 placeholder:text-[#1D1D1D] focus:outline-none"
            placeholder="Enter your email"
          />
          <input
            className="w-full border-b border-[#AAAA] bg-transparent p-3 placeholder:text-[#1D1D1D] focus:outline-none"
            placeholder="Type your message"
          />
        </form>
      </section>
      <div className="relative">
        <img
          src={rightSide}
          alt="right side"
          className="absolute right-0 md:-mt-56 md:h-[520px]"
        />
      </div>
    </div>
  );
};

export default Question;
