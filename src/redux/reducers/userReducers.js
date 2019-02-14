import {
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../../constants";

const defaultState = {
    isRegistered: false
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, isRegistered: true };
        case REGISTER_ERROR:
            return { ...state, isRegistered: false };
        default:
            return state;
    }
}