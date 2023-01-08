import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isLoggedIn: boolean;
};

const authState = createSlice({
    name: "authState",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setIsLoggedIn(state: AuthState) {
            state.isLoggedIn = true;
        },
        logOut(state: AuthState) {
            state.isLoggedIn = false;
        },
    },
});

// selectors
export const getIsLoggedIn = (state: any) => {
    return state.authState.isLoggedIn;
};

export const authReducer = authState.reducer;
export const authActions = authState.actions;