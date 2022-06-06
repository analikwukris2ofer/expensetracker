import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const initialState = {
  expensesList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expensesList: [...state.expensesList, action.payload],
      };
    }
    case DELETE_EXPENSE: {
      const { payload } = action;
      const updatedList = state.expensesList.filter(
        (item) => item.createdAt != payload.createdAt
      );
      return {
        ...state,
        expensesList: updatedList,
      };
    }
    default:
      return state;
  }
};
