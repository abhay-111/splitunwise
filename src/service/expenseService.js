import axios from "axios";
const baseUrl = "http://localhost:8000";
export const postFixedExpenses = async (data) => {
  await axios.post(baseUrl + "/fixed-expenses", data);
};

export const getFixedExpenses = async () => {
  return await axios.get(baseUrl + "/fixed-expenses");
};
export const addDailyExpense = async (data) => {
  return await axios.post(baseUrl + "/add-daily-expense", data);
};
export const getMonthlyChart = async () => {
  return await axios.get(baseUrl + "/get-monthly-chart");
};
