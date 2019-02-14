import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "../../constants";

const defaultState = {
    isLogggedIn: false
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true };
        case LOGIN_ERROR:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}