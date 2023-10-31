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
  return (
    <div className="xl:col-span-8 col-span-full row-span-4 lg:pt-10">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          barGap={10}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalBalance"
            fill="#2ecc71"
            name="Total Balance"
            barSize={70}
          />
          <Bar
            dataKey="totalSpend"
            fill="#686de0"
            name="Total Spend"
            barSize={70}
          />
          <Bar
            dataKey="totalRefer"
            fill="#eb4d4b"
            name="Total Refer"
            barSize={70}
          />
          <Bar
            dataKey="profit"
            fill="#f9ca24"
            name="Total Profit"
            barSize={70}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
