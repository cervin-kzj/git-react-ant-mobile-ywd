import { createStore, applyMiddleware, combineReducers } from "redux"
import ReduxThunk from "redux-thunk";
import { reducersetIsLoginAction } from "./modules/login"

const reducer = combineReducers({
    login: reducersetIsLoginAction
})

export const store = createStore(reducer, applyMiddleware(ReduxThunk))