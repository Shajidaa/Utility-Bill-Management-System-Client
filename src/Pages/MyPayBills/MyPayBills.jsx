import { useEffect } from "react";
import useAxiosSecure from "../../Hooks/Axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    axiosInstance.get(`/add-bills?email=${user?.email}`).then((data) => {
      console.log(data);
    });
  }, [axiosInstance, user]);
  return <div>pay bills</div>;
};

export default MyPayBills;
