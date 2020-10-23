import { getDetails } from "../../util/request";

const initState = {
    detail: {}
}

const setDetailsAction = (detail) => {
    return {
        type: "setDetailsAction",
        detail
    }
}

export const requestDetailsAction = (pid) => {
    return (dispatch, getState) => {
        try {
            if (getState().detail.detail.pid == pid) {
                dispatch(setDetailsAction(getState().detail.detail))
            }
            else {
                getDetails(pid).then((res) => {
                    dispatch(setDetailsAction(res.data.data));
                })
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
}

export const reducersetDetailsAction = (state = initState, action) => {
    switch (action.type) {
        case "setDetailsAction":
            return {
                ...state,
                detail: action.detail
            }
            break;
        default:
            return state;
            break;
    }
}

export const getDetail = state => {
    return state.detail.detail
}