import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Authorization";

export const store = configureStore({
    reducer: {
        // auth
        authState: authReducer,
    },
});