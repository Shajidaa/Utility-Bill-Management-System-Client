import Banner from "../../Components/Banner/Banner";
import CreditCard from "../../Components/CreditCard/CreditCard";
import CustomerFeedback from "../../Components/CustomerFeedback/CustomerFeedback";

import Business from "../../Components/Home/Business";
import CTA from "../../Components/Home/CTA";
import Partners from "../../Components/Home/Partners";

import RecentBills from "../../Components/Recent/RecentBills";
import Services from "../../Components/ServicesCard/Services";

const Home = () => {
  return (
    <>
      {" "}
      <title>Home | PayUp</title>
      <Banner></Banner>
      <Partners></Partners>
      <RecentBills></RecentBills>
      <Business></Business>
      <CreditCard></CreditCard>
      <Services></Services>
      <CustomerFeedback></CustomerFeedback>
      <CTA></CTA>
    </>
  );
};

export default Home;
