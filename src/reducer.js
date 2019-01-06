import { combineReducers } from "redux";
import loginReducer from "./components/Login/reducer";

export default combineReducers({
  login: loginReducer
});
