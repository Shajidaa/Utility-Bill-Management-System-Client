import React from "react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tariq",
    location: "Rajshahi",
    feedback:
      "PayUp made paying my bills stress-free. One platform for everything!",
  },
  {
    name: "Rafiq",
    location: "Dhaka",
    feedback:
      "The reminders help me never miss a due date again. Truly reliable.",
  },
  {
    name: "Nusrat",
    location: "Chittagong",
    feedback:
      "I love how fast and secure it is — no more waiting in long queues.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const CustomerFeedback = () => {
  return (
    <MyContainer>
      <h1 className="text-center text-3xl font-semibold mb-5">
        Trusted by Thousands of Happy Users
      </h1>
      <p className="text-center text-base font-normal text-gray-400 mb-10">
        Real stories from people who use PayUp to simplify their monthly bills.
      </p>

      <div className="flex flex-wrap justify-between gap-5 items-center mb-5">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full border border-blue-400 max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex space-x-4">
                <div>
                  <svg
                    className="rounded-full bg-yellow-400"
                    height={48}
                    width={48}
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold dark:text-white">
                    {t.name},
                  </div>
                  <div className="text-sm flex text-gray-500 dark:text-gray-200">
                    <FaLocationDot className="mr-1" />
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-sm text-gray-800 dark:text-gray-200">
                {t.feedback}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MyContainer>
  );
};

export default CustomerFeedback;
