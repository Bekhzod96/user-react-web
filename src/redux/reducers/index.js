import { combineReducers } from "redux";
import { registerReducer, getUsersReducer } from "./userReducers";
import { loginReducer } from "./loginReducer";
import { getPostsReducer } from "./postReducers";

const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    getUsersReducer,
    getPostsReducer
});

export default rootReducer;