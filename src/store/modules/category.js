import { getClassify } from "../../util/request"

const initState = {
    category: []
}

const setClassifyDataAction = (arr) => {
    return {
        type: "setClassifyDataAction",
        arr
    }
}
export const requestClassifyDataAction = () => {
    return (dispatch, getState) => {
        try {
            if (getState().category.category.length == 0) {
                getClassify().then((res) => {
                    dispatch(setClassifyDataAction(res.data.data))
                })
            }
            else {
                dispatch(getState().category.category)
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
}

export const reducersetClassifyDataAction = (state = initState, action) => {
    switch (action.type) {
        case "setClassifyDataAction":
            return {
                ...state,
                category: action.arr
            }
            break;
        default:
            return state;
            break;
    }
}

export const getClassifyData = (state) => {
    return state.category.category
}

