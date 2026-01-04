import Banner from "../../Components/Banner/Banner";
import Business from "../../Components/Home/Business";
import CreditCard from "../../Components/CreditCard/CreditCard";
import CustomerFeedback from "../../Components/CustomerFeedback/CustomerFeedback";
import Partners from "../../Components/Home/Partners";
import RecentBills from "../../Components/Recent/RecentBills";
import Services from "../../Components/ServicesCard/Services";

const Home = () => {
  return (
    <>
      {" "}
      <title>Home | PayUp</title>
      <Banner></Banner>
      <RecentBills></RecentBills>
      <CreditCard></CreditCard>
      <Services></Services>
      <Business></Business>
      <Partners></Partners>
      <CustomerFeedback></CustomerFeedback>
    </>
  );
};

export default Home;
