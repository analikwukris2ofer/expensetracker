import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
  expensesList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseList: [...state.expensesList, action.payload],
      };
    }
    default:
      return state;
  }
};
