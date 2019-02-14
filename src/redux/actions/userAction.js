import BootcampAPI from "../../helpers/BootcampAPI";
import { API, REGISTER_ERROR, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR } from "../../constants/";
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
/**----action creators-------- */

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
                localStorage.setItem("Token", token);
                dispatch(loginSuccess())
            })

            .catch(() => dispatch(loginError()));
    };

}



