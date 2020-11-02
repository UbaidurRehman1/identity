import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    user: null,
    isLogin: false,
    isError: false,
    error: "",
    isSignUpLoading: false,
    timeout: null
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START:
            return {...state, isLogin: false, isError: false, isSignUpLoading: true};
        case actionTypes.SIGNUP_FINISHED:
            return {...state, user: {...action.payload}, isLogin: true, isSignUpLoading: false}
        case actionTypes.SIGNUP_ERROR:
            return {...state, user: null, isError: true, isLogin: false, isSignUpLoading: false, error: action.error}
        case actionTypes.SET_TIMEOUT:
            return {...state, timeout: action.timeout}
        case actionTypes.REMOVE_SIGNUP_ERROR:
            return {...state, error: false, isSignUpLoading: false}
        default:
            return state;
    }
}

export default AuthReducer;
