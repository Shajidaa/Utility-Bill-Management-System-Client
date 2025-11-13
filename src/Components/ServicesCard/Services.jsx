import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import MyContainer from "../Shared/MyContainer/MyContainer";

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
  return (
    <MyContainer>
      <section className="py-20 transition-all duration-500 ">
        <div className="container mx-auto ">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 
              rounded-2xl shadow-sm bg-white/70 
               dark:bg-gray-800/60 border border-gray-200
                dark:border-gray-700 backdrop-blur-md transition-transform
                 duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex  items-center">
                  <h1>
                    <img src={service.image} alt="" />
                  </h1>
                  <h3
                    className="font-semibold
               text-lg mb-3 flex items-center text-gray-900 dark:text-gray-100"
                  >
                    {service.title}
                  </h3>
                </div>

                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                    >
                      <FaArrowRight className="text-sm opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MyContainer>
  );
};

export default Services;
