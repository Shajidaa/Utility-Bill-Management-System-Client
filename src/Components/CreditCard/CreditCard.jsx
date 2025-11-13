import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { IoArrowForwardOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const CreditCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCard = () => {
    if (!user) {
      toast.info("You have to login first..");
      return navigate("/login");
    }
    toast.info("Feature in progress. Available soon.");
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <MyContainer className="flex flex-col md:flex-row justify-between gap-5 items-center *:w-full md:*:w-1/2 py-10 overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-3">
          One destination for Your Cards
        </h1>
        <p className="text-lg font-normal text-gray-500 my-2">
          PayUp, Sonali Bank, DBL & ABC Bank –{" "}
          <i className="text-blue-500 font-bold">Credit Card and Debit Card</i>{" "}
          with assured Cashback and incredible offers.
        </p>
        <motion.button
          onClick={handleCard}
          className="btn secondary-btn mt-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply
          <IoArrowForwardOutline />
        </motion.button>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DotLottieReact
          src="https://lottie.host/31bcb96c-a65d-4c17-8a9f-ba15af59f64e/ybbE2jrkuP.lottie"
          loop
          autoplay
        />
      </motion.div>
    </MyContainer>
  );
};

export default CreditCard;
