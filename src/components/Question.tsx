import rightSide from '../assets/right-side.png';

const Question = () => {
  return (
    <div className="grid grid-cols-2 mb-32 pl-16 gap-32">
      <section>
        <h3 className="font-bai-jamjuree font-semibold text-3xl text-text mt-6 mb-10">
          Have a question? <br /> We are ready to assist
        </h3>
        <form className="flex flex-col items-start w-10/12 gap-y-8">
          <input
            className="border-b bg-transparent border-[#AAAA] focus:outline-none p-3 w-full placeholder:text-[#1D1D1D]"
            placeholder="Enter your email"
          />
          <input
            className="border-b border-[#AAAA] bg-transparent focus:outline-none p-3 w-full placeholder:text-[#1D1D1D]"
            placeholder="Type your message"
          />
        </form>
      </section>
      <div className="relative">
        <img
          src={rightSide}
          alt="right side"
          className="h-[520px] -mt-56 absolute right-0"
        />
      </div>
    </div>
  );
};

export default Question;
