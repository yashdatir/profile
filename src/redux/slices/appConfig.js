import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openApps: [],
    desktopApp: ""
}

const appConfig = createSlice({
    name: "appConfig",
    initialState,
    reducers: {
        addApp: (state, action) => {
            state.openApps = state.openApps.includes(action.payload) ? state.openApps : [...state.openApps, action.payload]
        },
        removeApp: (state, action) => {
            state.openApps = state.openApps.filter((app) => app !== action.payload)
        },
        openDesktopApp: (state, action) => {
            state.desktopApp = action.payload;
        },
        closeDesktopApp: (state, action) => {
            state.desktopApp = "";
        }
    }
});

export const { addApp, removeApp, closeDesktopApp, openDesktopApp } = appConfig.actions;
export default appConfig.reducer;