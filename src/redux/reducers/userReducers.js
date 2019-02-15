import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from "../../constants";

const defaultState = {
    isRegistered: false,
    users: null
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

export const getUsersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload };
        case GET_USERS_ERROR:
            return { ...state, users: null }
        default:
            return state;
    }
}