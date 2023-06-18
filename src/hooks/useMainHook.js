import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../redux/slices/mainSlice";

export const useMainHook = () => {
    const dispatch = useDispatch();
    const { mode, cursor } = useSelector(({ mainSlice }) => mainSlice);
    
    useEffect(() => {
        const setDimension = () => {
            if (window.innerWidth < 600) {
                mode !== "MOBILE" && dispatch(setMode("MOBILE"));
            } else {
                mode !== "DESKTOP" && dispatch(setMode("DESKTOP"));
            }
        }
        window.addEventListener('resize', setDimension);
        return () => window.removeEventListener('resize', setDimension);
    }, [dispatch, mode]);

    return ({
        mode, cursor
    })
}