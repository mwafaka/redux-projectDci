import { combineReducers } from "redux";
import postFood from "./postFood";

export default combineReducers({
  posts: postFood
});
