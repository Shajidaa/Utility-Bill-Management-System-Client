import React from "react";
import { useLoaderData } from "react-router";

const BillsDetails = () => {
  const details = useLoaderData();
  console.log(details);

  return <div>details</div>;
};

export default BillsDetails;
