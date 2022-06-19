import { combineReducers } from "redux";
import { homePageReducer } from "./reducers/homePage";
import { userReducer } from "./reducers/user";

export const rootReducer = combineReducers({
   homePage: homePageReducer,
   user: userReducer
})