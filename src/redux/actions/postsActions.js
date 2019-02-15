import BootcampAPI from "../../helpers/BootcampAPI";
import { API, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../../constants/";


const getPostsSuccess = (res) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: res.data,
    }
}
const getPostsError = () => {
    return {
        type: GET_POSTS_ERROR,
    }
}


export const getPosts = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_POSTS)
            .then(res => {
                dispatch(getPostsSuccess(res))
            })
            .catch((err) => {
                console.error(err);
                dispatch(getPostsError())
            })
    }
}