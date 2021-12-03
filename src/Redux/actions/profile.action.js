import { profileTypes } from "../types/profile.types";

export const handleAddFavDataAction = (info, isFavData) => {
  return {
    type: profileTypes.ADD_FAV,
    payload: { info, isFavData }
  };
};

export const handleAddFavVidACtion = (info, isFavVid) => {
  return {
    type:profileTypes.ADD_VID,
    payload: {info,isFavVid}
  }
}