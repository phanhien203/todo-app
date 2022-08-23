import { combineReducers } from "redux";
import reducers from "./reducer";

const rootReducer = combineReducers({
  data: reducers,
});

export default rootReducer;
