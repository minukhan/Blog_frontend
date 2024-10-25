import { combineReducers } from "redux";
import CommentReducer from "./comment";

const RootReducer = combineReducers({
  comment: CommentReducer,
});

export default RootReducer;
