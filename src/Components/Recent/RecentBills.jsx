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
  console.log(recentBills);

  return (
    <MyContainer>
      <h1 className="text-center text-4xl font-bold my-10">Recent Bills</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recentBills.map((bill) => (
          <Card bill={bill}></Card>
        ))}
      </div>
    </MyContainer>
  );
};

export default RecentBills;
