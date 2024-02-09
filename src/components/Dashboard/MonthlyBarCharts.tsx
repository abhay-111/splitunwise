import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useFixedExpenseStore } from "../../store/fixedExpenseStore";

export const MonthlyBarCharts = () => {
  const monthlyExpenseChart = useFixedExpenseStore(
    (state) => state.monthlyChart
  );

  return (
    <section className="flex flex-col gap-[25px] p-[30px_40px] rounded-[20px] bg-white">
      <p className="text-xl font-[600] leading-6">Monthly Expenses</p>
      <ResponsiveContainer
        style={{ fontSize: "12px" }}
        width="100%"
        height={400}>
        <BarChart
          width={500}
          height={300}
          data={monthlyExpenseChart}
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
          <Bar
            dataKey="fixedExpense"
            fill="red"
            activeBar={<Rectangle fill="red" stroke="red" />}
          />
          <Bar
            dataKey="extraExpense"
            fill="red"
            activeBar={<Rectangle fill="red" stroke="red" />}
          />
          <Bar
            dataKey="investment"
            fill="gold"
            activeBar={<Rectangle fill="gold" stroke="gold" />}
          />
          <Bar
            dataKey="balance"
            fill="green"
            activeBar={<Rectangle fill="green" stroke="green" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};
