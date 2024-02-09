import React, { useEffect, useMemo, useState } from "react";
import { useFixedExpenseStore } from "../../store/fixedExpenseStore";
import {
  postFixedExpenses,
  getFixedExpenses,
} from "../../service/expenseService";
import { AddDailyExpense } from "./AddDailyExpense";
import { useQuery } from "@tanstack/react-query";
interface FixedExpenses {
  montlyRent: string;
  househelp: string;
  wifi: string;
  sentHome: string;
  cook: string;
}
export const PersonalExpenseForm = () => {
  const setFixedExpenseTotal = useFixedExpenseStore(
    (state) => state.setTotalFixedExpense
  );
  const setFixedExpense = useFixedExpenseStore(
    (state) => state.setFixedExpense
  );
  const storeFixedExpense = useFixedExpenseStore((state) => state.expenses);
  const [showModal, setShowModal] = useState(false);
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpenses>({
    montlyRent: "",
    househelp: "",
    wifi: "",
    sentHome: "",
    cook: "",
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["fixExp"],
    queryFn: getFixedExpenses,
  });

  if (isSuccess) {
    console.log(data);
    setFixedExpenseTotal(data?.data.totalFixedExpenses);
    setFixedExpense(data?.data.expenses);
  }

  const totalFixedExpense: number = useMemo(() => {
    let total: number = 0;
    // console.log(fixedExpenses);
    Object.keys(fixedExpenses).forEach((val, index) => {
      if (!isNaN(fixedExpenses[val]) && fixedExpenses[val] !== "") {
        console.log("-->", fixedExpenses[val]);
        total += parseInt(fixedExpenses[val]);
      }
      // }
    });
    return total;
  }, [fixedExpenses]);

  const handleChange = (e: any) => {
    setFixedExpenses((data: FixedExpenses) => {
      return {
        ...data,
        [e.target.name]: e.target.value.length ? parseInt(e.target.value) : 0,
      };
    });
  };

  useEffect(() => {
    delete storeFixedExpense["id"];
    setFixedExpenses(storeFixedExpense);
  }, []);

  const saveExpense = () => {
    const data = {
      montlyRent: parseInt(fixedExpenses.montlyRent),
      househelp: parseInt(fixedExpenses.househelp),
      wifi: parseInt(fixedExpenses.wifi),
      sentHome: parseInt(fixedExpenses.sentHome),
      cook: parseInt(fixedExpenses.cook),
    };
    postFixedExpenses(data);
    setFixedExpenseTotal(totalFixedExpense);
  };
  return (
    <>
      {!isLoading ? (
        <>
          {showModal && (
            <>
              <AddDailyExpense
                setShowModal={setShowModal}
                showModal={showModal}></AddDailyExpense>
            </>
          )}
          <section className="w-full h-full">
            <div className="flex flex-col w-[50%] gap-[30px]">
              <div className="flex justify-between">
                <p className=" text-lg font-medium"> Montly Rent</p>
                <input
                  name="montlyRent"
                  className="bg-transparent outline-none border-b-2"
                  value={fixedExpenses.montlyRent}
                  onChange={handleChange}
                  placeholder="0.0"
                  type="number"></input>
              </div>
              <div className="flex justify-between">
                <p className=" text-lg font-medium">Househelp</p>
                <input
                  className="bg-transparent outline-none border-b-2"
                  onChange={handleChange}
                  value={fixedExpenses.househelp}
                  placeholder="0.0"
                  name="househelp"
                  type="number"></input>
              </div>
              <div className="flex justify-between">
                <p className=" text-lg font-medium">Cook</p>
                <input
                  className="bg-transparent outline-none border-b-2"
                  onChange={handleChange}
                  value={fixedExpenses.cook}
                  placeholder="0.0"
                  name="cook"
                  type="number"></input>
              </div>
              <div className="flex justify-between">
                <p className=" text-lg font-medium">Wifi + Phone Recharge</p>
                <input
                  className="bg-transparent outline-none border-b-2"
                  onChange={handleChange}
                  value={fixedExpenses.wifi}
                  placeholder="0.0"
                  name="wifi"
                  type="number"></input>
              </div>
              <div className="flex justify-between">
                <p className=" text-lg font-medium">Money sent home</p>
                <input
                  className="bg-transparent outline-none border-b-2"
                  onChange={handleChange}
                  value={fixedExpenses.sentHome}
                  placeholder="0.0"
                  name="sentHome"
                  type="number"></input>
              </div>
              <div className="flex w-full justify-between">
                <p className=" text-lg font-medium">Fixed Expenses : </p>
                <p className=" text-lg font-medium">Rs {totalFixedExpense} </p>
              </div>
              <div className="flex w-full justify-between">
                <p className=" text-lg font-medium"> </p>
                <button
                  // disabled={!isDisabled}
                  onClick={saveExpense}
                  className=" rounded-md p-[6px_18px] bg-green-300">
                  <p className=" text-sm font-medium ">Save</p>
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="p-[6px_18px] bg-orange-400 rounded-2xl">
              Add Daily Expenses
            </button>
          </section>
        </>
      ) : null}
    </>
  );
};
