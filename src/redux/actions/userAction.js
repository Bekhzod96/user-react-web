import BootcampAPI from "../../helpers/BootcampAPI";
import { API, REGISTER_ERROR, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../../constants/";
import CryptoJS from 'crypto-js';
/**---- actions--------  */
const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
        isRegistered: true,
    }
}
const registerError = () => {
    return {
        type: REGISTER_ERROR,
        isRegistered: false,
    }
}


const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        isLoggedIn: true,
    }
}
const loginError = () => {
    return {
        type: LOGIN_ERROR,
        isLoggedIn: false,
    }
}

const getUserSuccess = (res) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: res.data.payload,
    }
}
const getUserError = () => {
    return {
        type: GET_USERS_ERROR,
    }
}
/**---
 * -action creators-------- */

export const register = (username, email, password) => {
    return dispatch => {
        BootcampAPI.post(API.REGISTER, {
            email,
            username,
            hashedPassword: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base)
        })
            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()));
    };
}

export const login = (email, password) => {
    return dispatch => {
        BootcampAPI.post(API.LOGIN, {
            email,
            hashedPassword: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base)
        })
            .then(res => {
                const token = res.data.payload.token;
                /** Token is a key of the value of the token */
                localStorage.setItem("jwtToken", token);
                dispatch(loginSuccess())
            })

            .catch(() => dispatch(loginError()));
    };

}

export const getUsers = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_USERS)
            .then(res => {
                dispatch(getUserSuccess(res))
            })
            .catch((err) => {
                console.error(err);
                dispatch(getUserError())
            })
    }
}



