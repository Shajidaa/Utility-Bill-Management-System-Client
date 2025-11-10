import React from "react";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import RecentBills from "../../Components/Recent/RecentBills";

const Home = () => {
  return (
    <>
      {" "}
      <title>Home | PayUp</title>
      <Banner></Banner>
      <Category></Category>
      <RecentBills></RecentBills>
    </>
  );
};

export default Home;
