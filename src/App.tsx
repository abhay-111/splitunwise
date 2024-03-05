import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopNavigation } from "./components/Dashboard/TopNavigation";
import UserDashBoard from "./components/Dashboard/UserDashBoard";
import { SideDrawer } from "./components/Navigation/SideNav";
import { PersonalExpenseForm } from "./components/PersonalExpense/PersonalExpenseForm";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// const Loader = () => {
//   return (
//     <section className=" h-screen w-screen top-0 left-0 fixed bg-black flex justify-center items-center">
//       <p className=" text-[44px] font-bold text-white ">Board.</p>
//     </section>
//   );
// };
function App() {
  // const setFixedExpenseTotal = useFixedExpenseStore(
  //   (state) => state.setTotalFixedExpense
  // );
  // const setFixedExpense = useFixedExpenseStore(
  //   (state) => state.setFixedExpense
  // );
  // const setMonthlyChart = useFixedExpenseStore(
  //   (state) => state.setMonthlyChart
  // );
  // const setTotalExpense = useFixedExpenseStore(
  //   (state) => state.setTotalExpense
  // );
  const queryClient = new QueryClient();
  // const client = useQueryClient();
  // const chartQuery = useQuery({
  //   queryKey: ["monthlyChart"],
  //   queryFn: getMonthlyChart,
  // });
  // const fetchAllData = async () => {
  //   getMonthlyChart().then((data) => {
  //     const expenseChart = data.data.monthlyChart;
  //     const dummyArr: object[] = [];

  //     Object.keys(expenseChart).forEach((val: string) => {
  //       dummyArr.push(expenseChart[val]);
  //     });
  //     setMonthlyChart(dummyArr);
  //     setTotalExpense(data.data.totalMonthExpense);
  //     getFixedExpenses().then((data) => {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //       setFixedExpenseTotal(data.data.totalFixedExpenses);
  //       setFixedExpense(data.data.expenses);
  //     });
  //   });
  // }
  // const chartMutation = useMutation({
  //   mutationFn: fetchAllData,
  //   onSuccess: () => {

  //   }
  // })
  useEffect(() => {
    // console.log(chartQuery);
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
