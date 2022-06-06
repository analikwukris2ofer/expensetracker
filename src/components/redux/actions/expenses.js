import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};
export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    payload: data,
  };
};
