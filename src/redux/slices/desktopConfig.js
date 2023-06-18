import { faBars, faCircleInfo, faGamepad, faGears, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { createSlice } from "@reduxjs/toolkit";
import Img1 from "../../assets/bg/bg1.jpg";
import Img2 from "../../assets/bg/bg2.jpg";
import Img3 from "../../assets/bg/bg3.jpg";
import Img4 from "../../assets/bg/bg4.jpg";
import Img5 from "../../assets/bg/bg5.jpg";

const bgImg = [Img1, Img2, Img3, Img4, Img5];
const backgrounds = bgImg.map((img) => `url('${img}')`);

const taskBarApps = [
    { appId: "TASKBAR_MENU", icon: faBars },
    { appId: "TASKBAR_INFO", icon: faCircleInfo },
    { appId: "TASKBAR_ABOUT", icon: faLaptop },
    { appId: "TASKBAR_GAMES", icon: faGamepad },
    { appId: "TASKBAR_SETTINGS", icon: faGears }
];

const initialState = {
    backgroundImage: backgrounds[0],
    backgroundColor: "#191919",
    taskbarOrientation: "BOTTOM", // TOP, BOTTOM
    dateTimeFormat: "",
    info: {
        ...window.navigator
    },
    taskBarApps
}

const desktopConfig = createSlice({
    name: "desktopConfig",
    initialState,
    reducers: {
        setBackground: (state, action) => {
            state.background = action.payload
        },
        setCursor: (state, action) => {
            state.cursor = action.payload
        },
        setTaskbar: (state, action) => {
            state.taskbarOrientation = action.payload
        },
        setInfo: (state, payload) => { }
    }
});

export const { setBackground, setCursor, setInfo, setTaskbar } = desktopConfig.actions;
export default desktopConfig.reducer;