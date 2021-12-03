//1. Importaciones necesarias
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import { loginReducer } from "../reducers/login.reducer";
import {errorReducer} from "../reducers/error.reducer"
import {profileReducer} from "../reducers/profile.reducer"

//2. CombineReducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  session:loginReducer,
  error:errorReducer,
  profile:profileReducer
});

//3. Ceación y exportación del store

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );