import axios from "axios";

const instance = axios.create({
  baseURL: `https://utility-bill-management-system-serv.vercel.app/`,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
