import { combineReducers } from "redux";
import LogReducer from "./LogReducer";
import TechReducer from "./TechReducer";
export default combineReducers({
  log: LogReducer,
  tech: TechReducer
});

/*  We use the combine reducer to create root reducer and then we use the use reducer in the store*/
