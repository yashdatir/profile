import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import desktopConfig from "./slices/desktopConfig";
import appConfig from "./slices/appConfig";

export const store = configureStore({
    reducer: combineReducers({
        mainSlice,
        desktopConfig,
        appConfig
    }) 
});