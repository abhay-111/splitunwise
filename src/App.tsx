import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopNavigation } from "./components/Dashboard/TopNavigation";
import UserDashBoard from "./components/Dashboard/UserDashBoard";
import { SideDrawer } from "./components/Navigation/SideNav";
import { PersonalExpenseForm } from "./components/PersonalExpense/PersonalExpenseForm";
import { getFixedExpenses, getMonthlyChart } from "./service/expenseService";
import { useEffect } from "react";
import { useFixedExpenseStore } from "./store/fixedExpenseStore";
function App() {
  const setFixedExpenseTotal = useFixedExpenseStore(
    (state) => state.setTotalFixedExpense
  );
  const setFixedExpense = useFixedExpenseStore(
    (state) => state.setFixedExpense
  );
  const setMonthlyChart = useFixedExpenseStore(
    (state) => state.setMonthlyChart
  );
  const setTotalExpense = useFixedExpenseStore(
    (state) => state.setTotalExpense
  );
  useEffect(() => {
    getMonthlyChart().then((data) => {
      const expenseChart = data.data.monthlyChart;
      const dummyArr: object[] = [];

      Object.keys(expenseChart).forEach((val: string) => {
        dummyArr.push(expenseChart[val]);
      });
      setMonthlyChart(dummyArr);
      setTotalExpense(data.data.totalMonthExpense);
    });
    getFixedExpenses().then((data) => {
      console.log(data.data.totalFixedExpenses);
      setFixedExpenseTotal(data.data.totalFixedExpenses);
      setFixedExpense(data.data.expenses);
    });
  }, []);
  return (
    <>
      <section className="p-[40px] bg-[#f5f5f5] flex gap-[40px] h-screen">
        <SideDrawer></SideDrawer>
        <div className="w-full p-[20px] leading-7 flex flex-col gap-[40px]">
          <TopNavigation></TopNavigation>
          <Routes>
            <Route
              path="/dashboard"
              element={<UserDashBoard></UserDashBoard>}></Route>
            <Route
              path="/personal-expense"
              element={<PersonalExpenseForm></PersonalExpenseForm>}></Route>
          </Routes>
          {/* <TopNavigation></TopNavigation>
        <UserDashBoard/> */}
        </div>
      </section>
    </>
  );
}

export default App;
