import { errorTypes } from "../types/error.types";

const initialState = {
  message: null
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorTypes.NEW_ERROR:
      return {
        ...state,
        message: action.payload
      };

    case errorTypes.CLEAN_ERROR:
      return {
        ...state,
        message: null
      };

    default:
      return state;
  }
};