import { configureStore } from "@reduxjs/toolkit";
import ratingSlice from "./features/RatingSlice";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        rating: ratingSlice
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger)
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch; 
export const UseAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;