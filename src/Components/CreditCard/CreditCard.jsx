import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { IoArrowForwardOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";
const CreditCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleCard = () => {
    if (!user) {
      toast.info(`You have to login first..`);
      return navigate("/login");
    }
    if (user) {
      toast.info("Feature in progress. Available soon.");
    }
  };
  return (
    <MyContainer className="flex flex-col md:flex-row justify-between gap-5 items-center *:w-full md:*:w-1/2 py-10">
      <div>
        <h1 className="text-4xl font-bold ">One destination for Your Cards</h1>
        <p className="text-lg font-normal text-gray-500 my-2">
          PayUp ,Sonali Bank,DBL & ABC Bank -{" "}
          <i className="text-blue-500 font-bold">
            {" "}
            Credit Card and Debit Card with{" "}
          </i>
          assured Cashback and incredible offers.
        </p>
        <button onClick={handleCard} className="btn secondary-btn">
          Apply
          <IoArrowForwardOutline />
        </button>
      </div>
      <div>
        <DotLottieReact
          src="https://lottie.host/31bcb96c-a65d-4c17-8a9f-ba15af59f64e/ybbE2jrkuP.lottie"
          loop
          autoplay
        />
      </div>
    </MyContainer>
  );
};

export default CreditCard;
