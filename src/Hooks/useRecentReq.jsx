import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRecentReq = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: withdrawreq } = useQuery({
    queryKey: ["getWithdrawReq"],
    queryFn: async () => {
      const res = await axios.get(`/latest-withdraw-request/${user?.email}`);
      return res.data;
    },
  });

  const { data: deporeq } = useQuery({
    queryKey: ["getdeporeq"],
    queryFn: async () => {
      const res = await axios.get(`/latest-deposit-request/${user?.email}`);
      return res.data;
    },
  });

  return [withdrawreq, deporeq];
};

export default useRecentReq;
