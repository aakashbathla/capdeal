import { combineReducers } from "redux";
import loginReducer from "./containers/organisms/Login/reducer";

export default () => combineReducers({ login: loginReducer });
