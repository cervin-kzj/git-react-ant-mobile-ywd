import { createStore, applyMiddleware, combineReducers } from "redux"
import ReduxThunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { reducersetIsLoginAction } from "./modules/login"
import { reducersetIndexDataAction } from "./modules/home"
import { reducersetDetailsAction } from "./modules/detail"
import { reducerCartAction } from "./modules/cart"

let createHistory = require("history").createHashHistory;
let history = createHistory();
let routeWare = routerMiddleware(history);

const reducer = combineReducers({
    login: reducersetIsLoginAction,
    indexData: reducersetIndexDataAction,
    detail: reducersetDetailsAction,
    cart: reducerCartAction
})

export const store = createStore(reducer, applyMiddleware(ReduxThunk, routeWare))