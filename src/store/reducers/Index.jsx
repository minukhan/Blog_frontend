import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

const RootReducer = combineReducers({
  modal: modalReducer,
  // login: LoginReducer,
});
// const store = createStore(rootReducer);

export default RootReducer;
