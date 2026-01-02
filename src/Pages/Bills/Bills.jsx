import React, { useEffect, useState } from "react";

import useAxios from "../../Hooks/Axios/useAxios";
import Card from "../../Components/Card/Card";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";
import Spinner from "../../Components/Shared/Spinner";

const Bills = () => {
  const instance = useAxios();
  const [loading, setLoading] = useState(false);
  const [bills, setBills] = useState([]);
  useEffect(() => {
    setLoading(true);
    instance
      .get("/bills")
      .then((data) => setBills(data.data))
      .finally(() => {
        setLoading(false);
      });
  }, [instance]);
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <MyContainer>
      <title> Bills | PayUp</title>
      <div className="py-5">
        <h1 className="title  text-center ">All Your Bills in One Place </h1>
        <p className="mb-5 sub-title text-center">
          View, track, and manage all your utility bills easily with PayUp.
        </p>
      </div>
      <div className="grid gap-5 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bills.map((bill, index) => (
          <Card key={index} bill={bill}></Card>
        ))}
      </div>
    </MyContainer>
  );
};

export default Bills;
