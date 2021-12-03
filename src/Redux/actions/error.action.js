import { errorTypes } from "../types/error.types";

export const handleAddErrorAction = message => {
  return {
    type: errorTypes.NEW_ERROR,
    payload: message
  };
};

export const handleCleanErrorAction = () => {
  return {
    type: errorTypes.CLEAN_ERROR
  };
};
