import { DataCards } from "../common/DataCards";
import { DailyExpenseChart } from "./DailyExpenseChart";
import { useFixedExpenseStore } from "../../store/fixedExpenseStore";
import { useQuery } from "@tanstack/react-query";
import {
  getMonthlyChart,
  getFixedExpenses,
} from "../../service/expenseService";
import { MonthlyBarCharts } from "./MonthlyBarCharts";
interface Dimension {
  height: number;
  width: number;
}
interface UserStat {
  bgColor: string;
  iconUrl: string;
  statName: string;
  statValue: string;
  dimensions: Dimension;
}

const UserDashBoard = () => {
  const fixedExpenseTotal = useFixedExpenseStore(
    (state) => state.totalFixedExpense
  );
  const setDailyChart = useFixedExpenseStore((state) => state.setDailyChart);
  const setTotalExpense = useFixedExpenseStore(
    (state) => state.setTotalExpense
  );
  const setFixedExpenseTotal = useFixedExpenseStore(
    (state) => state.setTotalFixedExpense
  );
  const setFixedExpense = useFixedExpenseStore(
    (state) => state.setFixedExpense
  );
  const setMonthlyChart = useFixedExpenseStore(
    (state) => state.setMonthlyChart
  );
  const totalExpenses = useFixedExpenseStore((state) => state.totalExpenses);
  const MONTHLY_INCOME = 102254;
  const MUTUAL_FUNDS = 35000;
  const STOCKS = 25000;
  const INVESTMENTS = MUTUAL_FUNDS + STOCKS;
  const userStats: UserStat[] = [
    {
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/dzf9eded4n1fbvkyxgcx.png",
      statName: "Montly Income",
      statValue: "₹ " + MONTHLY_INCOME,
      bgColor: "#DEE0EF",
      dimensions: {
        height: 24,
        width: 26,
      },
    },
    {
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/qsjo2lvu6duko0kwyhn1.png",
      statName: "Fixed Expense",
      statValue: "₹ " + fixedExpenseTotal,
      bgColor: "#F4ECDD",
      dimensions: {
        height: 24,
        width: 20,
      },
    },
    {
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/qsjo2lvu6duko0kwyhn1.png",
      statName: "Mutual Funds + Stocks",
      statValue: "₹ " + INVESTMENTS,
      bgColor: "#F4ECDD",
      dimensions: {
        height: 24,
        width: 20,
      },
    },
    {
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/vtyiizsirmhvsjikjiss.png",
      statName: "Extra Expenses",
      statValue: `₹ ${totalExpenses}`,
      bgColor: "#EFDADA",
      dimensions: {
        width: 24,
        height: 24,
      },
    },
    {
      iconUrl:
        "https://res.cloudinary.com/dqzjevzuo/image/upload/v1685772357/gaxvkedl59p1vczjhuhw.png",
      statName: "Total Balance",
      statValue: `₹ ${
        MONTHLY_INCOME - INVESTMENTS - fixedExpenseTotal - totalExpenses
      }`,
      bgColor: "#DDEFE0",
      dimensions: {
        height: 24,
        width: 36,
      },
    },
  ];
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["monthlyChart"],
    queryFn: getMonthlyChart,
  });
  if (isSuccess) {
    const expenseChart = data?.data?.monthlyChart;
    const dummyArr: object[] = [];
    let monthlyTotal = 0;
    Object.keys(expenseChart).forEach((val: string) => {
      dummyArr.push(expenseChart[val]);
      monthlyTotal += expenseChart[val].total;
    });
    const monthlyExpense = [];
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    monthlyExpense.push({
      name: months[new Date().getMonth()],
      investment: 35000,
      extraExpense: monthlyTotal,
      fixedExpense: fixedExpenseTotal,
      balance: 102254 - 35000 - monthlyTotal - fixedExpenseTotal,
    });
    setMonthlyChart(monthlyExpense);
    setDailyChart(dummyArr);
    setTotalExpense(data?.data.totalMonthExpense);
  }

  const fixExpQuery = useQuery({
    queryKey: ["fixExp"],
    queryFn: getFixedExpenses,
  });

  if (fixExpQuery.isSuccess) {
    const { data } = fixExpQuery;
    setFixedExpenseTotal(data?.data.totalFixedExpenses);
    setFixedExpense(data?.data.expenses);
  }
  return (
    <>
      {!isLoading ? (
        <section className="flex flex-col gap-[40px] overflow-y-scroll pb-[30px]">
          <div className="w-full  mx-auto flex gap-[36px] min-h-[120px] overflow-x-scroll no-scrollbar">
            {userStats.map((stat, index) => {
              return (
                <DataCards
                  key={index}
                  statName={stat.statName}
                  statValue={stat.statValue}
                  bgColor={stat.bgColor}
                  iconUrl={stat.iconUrl}
                  dimensions={stat.dimensions}></DataCards>
              );
            })}
          </div>
          <DailyExpenseChart></DailyExpenseChart>
          <MonthlyBarCharts></MonthlyBarCharts>
        </section>
      ) : null}
    </>
  );
};

export default UserDashBoard;
