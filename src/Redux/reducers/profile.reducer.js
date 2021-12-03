import { profileTypes } from "../types/profile.types";

const initialState = {
  favData: [],
  favVid: []
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileTypes.ADD_FAV:
      return {
        ...state,
        // favData: [...state.favData, action.payload]
        favData: action.payload.isFavData
          ? state.favData.filter(item => item.id !== action.payload.info.id)
          : [...state.favData, action.payload.info]
      };

    case profileTypes.ADD_VID:
      return {
        ...state,
        favVid: action.payload.isFavVid
        ? state.favVid.filter(item => item.id !== action.payload.info.id)
        : [...state.favVid, action.payload.info]
      }

    default:
      return state;
  }
};
