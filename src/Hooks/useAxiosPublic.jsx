import axios from "axios";
const instance = axios.create({
  // baseURL: "https://invotrust-server.vercel.app/api/v1",
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
