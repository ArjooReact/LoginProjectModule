import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginSlice from "./login/loginSlice";
import loginAsyncSlice from "./login/loginAsyncSlice"

const combineReducer= combineReducers({
    loginRedux:loginSlice,
     authSlice:loginAsyncSlice
})
const Store=configureStore({
    reducer: combineReducer,
   
})

export default Store