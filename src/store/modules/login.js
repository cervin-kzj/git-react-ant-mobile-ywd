import { login } from "../../util/request"
import { Toast } from 'antd-mobile';
import { push, go } from "react-router-redux";

/**
 * initState
 */
const initState = {
    isLogin: false,
    userInfo: {}
}

/**
 * action creater
 */
export const setIsLoginAction = (bool) => (
    {
        type: "setIsLoginAction",
        isLogin: bool
    }
)
export const setUserInfoAction = (userInfo) => {
    return {
        type: "setUserInfoAction",
        userInfo: userInfo
    }
}

export const requestLoginAction = (user) => {
    return (dispatch, getState) => {
        try {
            login(user.phone, user.password).then(res => {
                if (res.data.status == 1) {
                    dispatch(setIsLoginAction(true));
                    dispatch(setUserInfoAction(user))
                    // dispatch(push('/mine'));
                    dispatch(go(-1));
                }
                else {
                    Toast.info(res.data.msg, 1);
                }
            })
        }
        catch (e) {
            console.warn(e);
        }
    }
}

/**
 * reducer
 * @param {*} state
 * @param {*} action
 */
export const reducersetIsLoginAction = (state = initState, action) => {
    switch (action.type) {
        case "setIsLoginAction":
            return {
                ...state,
                isLogin: action.isLogin
            }
            break;
        case "setUserInfoAction":
            return {
                ...state,
                userInfo: action.userInfo
            }
            break;
        default:
            return state;
            break;
    }
}

/**
 * reselector
 */
export const getIsLogin = (state) => {
    return state.login.isLogin;
}
export const getUserInfo = (state) => {
    return state.login.userInfo;
}