import React from "react";
import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <FadeLoader color="blue" />
    </div>
  );
};

export default Spinner;
