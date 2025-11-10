import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/Axios/useAxios";

const Category = () => {
  const instance = useAxios();
  const [billsCategory, setBillsCategory] = useState([]);
  useEffect(() => {
    instance.get("/bills").then((data) => setBillsCategory(data.data));
  }, [instance]);

  //   const singleCard = billsCategory.map((c) => <p>{c.category}</p>);
  const category = [...new Set(billsCategory.map((item) => item.category))];
  console.log(category);

  return <div>Bill Payments</div>;
};

export default Category;
