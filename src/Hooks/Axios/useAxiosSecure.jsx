import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth";
const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/`,
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  //request interceptor
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);
  return axiosInstance;
};

export default useAxiosSecure;
