import { firebase, googleProvider } from "../../firebase/firebase.config";
import { loginTypes } from "../types/login.types";

//Actions
import { handleAddErrorAction, handleCleanErrorAction } from "./error.action";


export const handleGoogleLoginAction = () => {
    return async dispatch => {
      try {
        const { user } = await firebase.auth().signInWithPopup(googleProvider);
        const { displayName, email, photoURL, uid } = user;
        dispatch(handleFillUserInfoAction({ displayName, email, photoURL, uid }));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const handleLoginWithEmailAction = ({ emailForm, password }) => {
    return async dispatch => {
      try {
        dispatch(handleCleanErrorAction());
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(emailForm, password);
        const { displayName, email, uid } = user;
  
        dispatch(handleFillUserInfoAction({ displayName, email, uid }));
      } catch (error) {
        console.log(error);
        dispatch(handleAddErrorAction(error.message));
      }
    };
  };
  
  export const handleRegisterAction = ({ userName, email, password }) => {
    return async dispatch => {
      try {
        dispatch(handleCleanErrorAction());
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
  
        await user.updateProfile({ displayName: userName });
  
        dispatch(
          handleFillUserInfoAction({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
          })
        );
      } catch (error) {
        console.log(error.code);
        dispatch(handleAddErrorAction(error.message));
      }
    };
  };
  
  export const handleLogoutAction = () => async dispatch => {
    await firebase.auth().signOut();
    dispatch(handleFillLogoutAction());
  };
  
  const handleFillLogoutAction = () => {
    return {
      type: loginTypes.LOGOUT
    };
  };
  
  export const handleFillUserInfoAction = userInfo => {
    return {
      type: loginTypes.LOGIN,
      payload: userInfo
    };
  };