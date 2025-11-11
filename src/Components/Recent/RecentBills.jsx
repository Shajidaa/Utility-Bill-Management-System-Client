import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/Axios/useAxios";
import Card from "../Card/Card";
import MyContainer from "../Shared/MyContainer/MyContainer";

const RecentBills = () => {
  const instance = useAxios();
  const [recentBills, setRecentBills] = useState([]);
  useEffect(() => {
    instance.get("/recent-bills").then((data) => setRecentBills(data.data));
  }, [instance]);
  //category
  const [billsCategory, setBillsCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    instance.get("/bills").then((data) => setBillsCategory(data.data));
  }, [instance]);

  let category = [...new Set(billsCategory.map((item) => item.category))];
  category.splice(-1, 1);
  const filteredBills = selectedCategory
    ? billsCategory.filter((bill) => bill.category === selectedCategory)
    : [];

  return (
    <MyContainer>
      <h1>Bill Payments</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {category.map((c) => (
          <button
            onClick={() => setSelectedCategory(c)}
            className={`btn ${
              selectedCategory === c ? "btn-primary" : "btn-outline"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {selectedCategory ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Bills in "{selectedCategory}"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBills.map((bill) => (
              <Card bill={bill}></Card>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-4xl font-bold my-10">Recent Bills</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recentBills.map((bill) => (
              <Card bill={bill}></Card>
            ))}
          </div>
        </>
      )}
    </MyContainer>
  );
};

export default RecentBills;
