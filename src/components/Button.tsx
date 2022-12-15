import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-primary text-base font-poppins text-white font-medium py-4 px-7 rounded-20">
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
