import {
    GET_POSTS_ERROR,
    GET_POSTS_SUCCESS
} from "../../constants";

const defaultState = {
    posts: null
}


export const getPostsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload };
        case GET_POSTS_ERROR:
            return { ...state, posts: null }
        default:
            return state;
    }
}