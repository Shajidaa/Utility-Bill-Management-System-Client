import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorCard = () => {
  return (
    <div>
      <Link
        to={"/bills"}
        className="my-10 flex justify-center items-center hover:underline hover:text-primary  "
      >
        <FaArrowLeft></FaArrowLeft>
        Bills
      </Link>
      <h1 className="text-center font-bold text-2xl md:text-4xl text-primary">
        The Bill is not found
      </h1>
      <DotLottieReact
        src="https://lottie.host/b32140ce-ee4b-4cbb-8c0f-89e3985365af/GmfXbz89BV.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default ErrorCard;
