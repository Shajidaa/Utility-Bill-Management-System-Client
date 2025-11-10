import React, { useEffect, useState } from "react";

import useAxios from "../../Hooks/Axios/useAxios";
import Card from "../../Components/Card/Card";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";

const Bills = () => {
  const instance = useAxios();
  const [bills, setBills] = useState([]);
  useEffect(() => {
    instance.get("/bills").then((data) => setBills(data.data));
  }, [instance]);
  return (
    <MyContainer>
      <title> Bills | PayUp</title>
      Bills
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bills.map((bill) => (
          <Card bill={bill}></Card>
        ))}
      </div>
    </MyContainer>
  );
};

export default Bills;
