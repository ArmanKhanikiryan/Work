import {configureStore} from "@reduxjs/toolkit";
import mainSlider from "./mainSlider/mainSliderSlice"
import arplasSlicer from "./arplas/arplasSlicer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        mainSlider: mainSlider,
        arplas: arplasSlicer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;