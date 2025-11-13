import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Banking",
      image: "https://i.ibb.co.com/39wzfJDr/icons8-merchant-account-48.png",
      items: ["Bank & savings accounts", "Credit cards", "Personal loans"],
    },
    {
      title: "Home Loan",
      image: "https://i.ibb.co.com/5WjRyhsX/icons8-bank-building-48.png",
      items: ["Repayments calculator", "Interest rates", "Refinancing"],
    },
    {
      title: "Insurance",
      image: "https://i.ibb.co.com/4ZtM991M/icons8-insurance-48.png",
      items: ["Home insurance", "Car insurance", "Health insurance"],
    },
    {
      title: "International",
      image: "https://i.ibb.co.com/zHbrSLCm/icons8-around-the-globe-48.png",
      items: [
        "Overseas payment",
        "Foreign exchange rates",
        "Exchange calculator",
      ],
    },
    {
      title: "Business",
      image: "https://i.ibb.co.com/QFBBwN57/icons8-businesswoman-48.png",
      items: [
        "Bank accounts & cards",
        "EFortS & eCommerce",
        "Business loans & finance",
      ],
    },
    {
      title: "Rates & Calculators",
      image: "https://i.ibb.co.com/8gLfJcZ3/icons8-rate-48.png",
      items: ["Rates & fees", "Tools & calculators", "Savings calculator"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <MyContainer>
      <section className="py-20 transition-all duration-500">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex items-center gap-3 mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 25px rgba(59,130,246,0.15)",
                }}
                className="group p-6 rounded-2xl shadow-sm bg-white/70 
                dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700
                backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={service.image} alt={service.title} />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {service.title}
                  </h3>
                </div>

                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5, color: "#0284c7" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <FaArrowRight className="text-sm opacity-60" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MyContainer>
  );
};

export default Services;
