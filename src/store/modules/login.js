import { login } from "../../util/request"
/**
 * initState
 */
const initState = {
    isLogin: false
}

/**
 * action creater
 */
const setIsLoginAction = () => (
    {
        type: "setIsLoginAction",
        isLogin: true
    }
)

export const requestLoginAction = (user) => {
    return (dispatch, getState) => {
        try {
            login(user.phone, user.password).then(res => {
                if (res.data.status == 1) {
                    dispatch(setIsLoginAction());
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
        default:
            return state;
            break
    }
}

/**
 * reselector
 */
export const getIsLogin = (state) => {
    return state.login.isLogin;
}