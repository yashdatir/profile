import { createSlice } from "@reduxjs/toolkit";
import cursor from "../../assets/bg/cursor.cur";

const initialState = {
    mode: "DESKTOP",
    cursor
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
        }
    }
});

export const { setMode } = mainSlice.actions;
export default mainSlice.reducer;