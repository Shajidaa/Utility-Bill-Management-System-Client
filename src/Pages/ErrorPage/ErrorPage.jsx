import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Link
        to={"/"}
        className="my-10 flex justify-center items-center hover:underline hover:text-primary  "
      >
        <FaArrowLeft />
        back to homePage
      </Link>
      <p className="text-center font-bold text-xl text-primary md:text-4xl">
        Page not found
      </p>
      <DotLottieReact
        src="https://lottie.host/b72fbbd8-99e1-4cb4-99f1-d484884548cb/qUP70XkYpx.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default ErrorPage;
