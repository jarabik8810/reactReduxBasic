import { createSlice } from '@reduxjs/toolkit';

// AUTH STATE
const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        logIn(state) { state.isAuthenticated = true; },
        logOut(state) { state.isAuthenticated = false; }
    }
});

export const authActions = authSlice.actions;

export default authSlice;