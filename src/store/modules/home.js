import { getIndexData } from "../../util/request"

const initState = {
    indexData: []
}

const setIndexDataAction = (indexData) => {
    return {
        type: "setIndexDataAction",
        indexData: indexData
    }
}

export const requestIndexDataAction = () => {
    return (dispatch, getState) => {
        try {
            if (getState().indexData.indexData.length == 0) {
                getIndexData().then((res) => {
                    dispatch(setIndexDataAction(res.data.data));
                })
            } else {
                dispatch(getState().indexData.indexData)
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
}

export const reducersetIndexDataAction = (state = initState, action) => {
    switch (action.type) {
        case "setIndexDataAction":
            return {
                ...state,
                indexData: action.indexData
            }
            break;
        default:
            return state;
            break;
    }
}

export const getIndexDt = state => {
    return state.indexData.indexData
}