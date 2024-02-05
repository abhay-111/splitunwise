import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface Expenses {
  monthlyRent: number;
  cook: number;
  wifi: number;
  moneySentHome: number;
  househelp: number;
}
export interface FixedExpenseStore {
  totalFixedExpense: number;
  expenses: Expenses;
  monthlyChart: object[];
  totalExpenses: number;
  num: number;
  setTotalFixedExpense: () => void;
}
export const useFixedExpenseStore = create(
  devtools((set) => ({
    totalFixedExpense: 0,
    expenses: {},
    monthlyChart: [],
    totalExpenses: 0,
    num: 0,
    setTotalFixedExpense: (total: number) => {
      set((state: FixedExpenseStore) => {
        state.totalFixedExpense = total;
        return state;
      });
    },
    setFixedExpense: (expenses: Expenses) => {
      set((state: FixedExpenseStore) => {
        state.expenses = expenses;
        return state;
      });
    },
    setMonthlyChart: (chart: object[]) => {
      set((state: FixedExpenseStore) => {
        state.monthlyChart = chart;
        return state;
      });
    },
    setTotalExpense: (total: number) => {
      set((state: FixedExpenseStore) => {
        state.totalExpenses = total;
        return state;
      });
    },
    setNum: (total: number) => {
      set((state: FixedExpenseStore) => {
        state.num = total;
        return state;
      });
    },
  }))
);
