import Banner from "../../Components/Banner/Banner";
import CreditCard from "../../Components/CreditCard/CreditCard";

import RecentBills from "../../Components/Recent/RecentBills";

const Home = () => {
  return (
    <>
      {" "}
      <title>Home | PayUp</title>
      <Banner></Banner>
      <RecentBills></RecentBills>
      <CreditCard></CreditCard>
    </>
  );
};

export default Home;
