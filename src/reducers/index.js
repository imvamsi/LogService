import { combineReducers } from "redux";
import LogReducer from "./LogReducer";
export default combineReducers({
  log: LogReducer
});

/*  We use the combine reducer to create root reducer and then we use the use reducer in the store*/
