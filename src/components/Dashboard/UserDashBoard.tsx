import { DataCards } from "../common/DataCards";
import { DailyExpenseChart } from "./DailyExpenseChart";
import { useFixedExpenseStore } from "../../store/fixedExpenseStore";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyChart } from "../../service/expenseService";
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
  const setMonthlyChart = useFixedExpenseStore(
    (state) => state.setMonthlyChart
  );
  const setTotalExpense = useFixedExpenseStore(
    (state) => state.setTotalExpense
  );
  const totalExpenses = useFixedExpenseStore((state) => state.totalExpenses);
  const MONTHLY_INCOME = 102254;
  const MUTUAL_FUNDS = 35000;
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
      statName: "Mutual Funds",
      statValue: "₹ " + MUTUAL_FUNDS,
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
        MONTHLY_INCOME - MUTUAL_FUNDS - fixedExpenseTotal - totalExpenses
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

    Object.keys(expenseChart).forEach((val: string) => {
      dummyArr.push(expenseChart[val]);
    });
    setMonthlyChart(dummyArr);
    setTotalExpense(data?.data.totalMonthExpense);
  }
  return (
    <>
      {!isLoading ? (
        <section className="flex flex-col gap-[40px]">
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
        </section>
      ) : null}
    </>
  );
};

export default UserDashBoard;
