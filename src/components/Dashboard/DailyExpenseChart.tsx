import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// import { getMonthlyChart } from "../../service/expenseService.js";
// import { useEffect, useState } from "react";
import { useFixedExpenseStore } from "../../store/fixedExpenseStore";
export const DailyExpenseChart = () => {
  // const [dailyChart, setMonthlyChart] = useState<object[]>([]);
  const dailyChart = useFixedExpenseStore((state) => state.dailyChart);
  return (
    <section className="flex flex-col gap-[25px] p-[30px_40px] rounded-[20px] bg-white">
      <p className="text-xl font-[600] leading-6">Daily Expenses</p>
      <ResponsiveContainer className="ml-[-35px]" width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={dailyChart}
          style={{
            fontSize: "12px",
          }}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
