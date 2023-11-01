import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Statistics",
    totalBalance: 240.74,
    totalSpend: 130.4,
    totalRefer: 25,
    profit: 175.4,
  },
];

const Chart = () => {
  const [isLGScreen, setIsLGScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsLGScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`lg:col-span-8 col-span-full lg:pt-14`}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} barGap={10}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalBalance"
            fill="#2ecc71"
            name="Total Balance"
          barSize={isLGScreen ? 60 :''} // Specify the bar width for LG and non-LG screens
          />
          <Bar
            dataKey="totalSpend"
            fill="#686de0"
            name="Total Spend"
            barSize={isLGScreen ? 60 : ''} // Specify the bar width for LG and non-LG screens
          />
          <Bar
            dataKey="totalRefer"
            fill="#eb4d4b"
            name="Total Refer"
            barSize={isLGScreen ? 60 : ''} // Specify the bar width for LG and non-LG screens
          />
          <Bar
            dataKey="profit"
            fill="#f9ca24"
            name="Total Profit"
            barSize={isLGScreen ? 60 : ''} // Specify the bar width for LG and non-LG screens
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
