import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth";
const axiosInstance = axios.create({
  baseURL: `https://utility-bill-management-system-serv.vercel.app/`,
});
const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  //request interceptor
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );
    //response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          logOut().then(() => {});
        }
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut]);
  return axiosInstance;
};

export default useAxiosSecure;
