import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/Axios/useAxios";
import Card from "../Card/Card";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { Link } from "react-router";
import Spinner from "../Shared/Spinner";
import { motion } from "framer-motion";

const RecentBills = () => {
  const instance = useAxios();
  const [recentBills, setRecentBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [billsCategory, setBillsCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLoading(true);
    instance
      .get("/bills")
      .then((data) => setBillsCategory(data.data))
      .finally(() => setLoading(false));
  }, [instance]);

  useEffect(() => {
    setLoading(true);
    instance
      .get("/recent-bills")
      .then((data) => setRecentBills(data.data))
      .finally(() => setLoading(false));
  }, [instance]);

  if (loading) {
    return <Spinner />;
  }

  // category
  let category = [...new Set(billsCategory.map((item) => item.category))];
  category.splice(-1, 0);

  const filteredBills = selectedCategory
    ? billsCategory.filter((bill) => bill.category === selectedCategory)
    : [];

  const categoryImages = {
    Electricity: "https://i.ibb.co.com/Z1XzYYvs/icons8-light-48.png",
    Gas: "https://i.ibb.co.com/gb5wC69V/icons8-gas-64.png",
    Water: "https://i.ibb.co.com/b54N0FSn/icons8-faucet-48.png",
    Internet: "https://i.ibb.co.com/Nn9QBLKY/icons8-internet-48.png",
    Education: "https://i.ibb.co.com/zVzgCdst/icons8-education-48.png",
    "Mobile Recharge": "https://i.ibb.co.com/rRmJh2kW/icons8-iphone-14-48.png",
    Tracker: "https://i.ibb.co.com/C3LfMTTf/icons8-tracker-64.png",
    "Govt Fee": "https://i.ibb.co.com/TxzhYCvH/icons8-fee-64.png",
  };

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
      <h1 className="text-center text-3xl md:text-4xl font-bold py-10">
        Bill Payments
      </h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mb-10">
        {category.map((c, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedCategory(c)}
            className={`p-2 rounded-2xl flex flex-col justify-center items-center cursor-pointer
              transition-all dark:bg-gray-700 bg-base-300
              ${selectedCategory === c ? "bg-blue-200 dark:bg-gray-900" : ""}
            `}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src={categoryImages[c]}
              alt={c}
              className="w-16 h-16 object-contain"
            />
            <span className="font-semibold mt-2">{c}</span>
          </motion.div>
        ))}
      </div>

      {/* Bills Section */}
      {selectedCategory ? (
        <>
          <div className="my-10 flex justify-between items-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Bills in : {selectedCategory}
            </h2>
            <Link to={"/bills"} className="text-primary hover:underline">
              bills ➡
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBills.map((bill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Card bill={bill} />
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="my-10 flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold">Recent Bills</h1>
            <Link to={"/bills"} className="text-primary hover:underline">
              bills ➡
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recentBills.map((bill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Card bill={bill} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </MyContainer>
  );
};

export default RecentBills;
