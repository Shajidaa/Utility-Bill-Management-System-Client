import axios from "axios";

const instance = axios.create({
  baseURL: `https://utility-bill-management-system-server-3mi8k3xuv.vercel.app/`,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
