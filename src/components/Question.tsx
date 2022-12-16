import React from "react";

const Question = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <section>
        <h3 className="font-bai-jamjuree font-semibold text-center text-2xl text-text mt-6 mb-10">
          Have a question? <br /> We are ready to assist
        </h3>
        <form>
          <input className="border-b " placeholder="Enter your email"/>
        </form>
      </section>
    </div>
  );
};

export default Question;
