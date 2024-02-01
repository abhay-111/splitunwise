import React, { useState } from "react";
import { addDailyExpense } from "../../service/expenseService.js";
interface AddDailyExpenseProps {
  setShowModal: (val: boolean) => void;
  showModal: boolean;
}
export const AddDailyExpense = ({
  setShowModal,
  showModal,
}: AddDailyExpenseProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [tag, setTag] = useState<string>("Food");
  const [date, setDate] = useState<string>(Date.now().toString());
  return (
    <section className="max-h-[600px] p-[50px] min-w-[30%] absolute left-[50%] top-[50%] shadow-lg translate-x-[-50%] translate-y-[-50%] rounded-[25px] bg-white">
      <p className=" font-medium text-[20px]">Add Expenses {showModal}</p>
      <button
        className=" absolute top-[30px] right-[20px]"
        onClick={() => setShowModal(false)}>
        X
      </button>
      <div className="h-full  flex flex-col gap-[20px] mt-[20px] w-full">
        <div className="flex flex-col gap-[10px]">
          <p className=" text-lg font-medium text-[16px]">Amount</p>
          <input
            name="montlyRent"
            className="bg-transparent outline-none border-b-2"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="0.0"
            type="number"></input>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className=" text-lg font-medium text-[16px]">Tag</p>
          <select
            onChange={(e) => {
              setTag(e.target.value);
            }}
            name=""
            className="border-b-2"
            id="">
            <option selected value="Food">
              Food
            </option>
            <option value="Travel">Travel</option>
            <option value="Miscelleneous">Miscelleneous</option>
            <option value="Food">Food</option>
          </select>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className=" text-lg font-medium text-[16px]">Date</p>
          <input
            onChange={(e) => setDate(e.target.value)}
            className="border-b-2"
            type="date"
            name="date"
            id=""
          />
        </div>
        <button
          onClick={() => {
            const formattedDate = new Date(date).toISOString();
            addDailyExpense({
              tag,
              date: formattedDate,
              amount,
            });
            setShowModal(false);
          }}
          className=" rounded-md p-[6px_18px] bg-green-300">
          <p className=" text-sm font-medium ">Save</p>
        </button>
      </div>
    </section>
  );
};
