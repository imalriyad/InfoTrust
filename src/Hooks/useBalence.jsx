import { useState } from "react";
const useBalence = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalReferral, setTotalReferral] = useState(0);
 
 console.log(totalBalance);

  return {
    totalBalance,
    totalProfit,
    totalSpent,
    totalReferral,
    setTotalBalance
  };
};

export default useBalence;
