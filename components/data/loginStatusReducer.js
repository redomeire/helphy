import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState: {
        isLoggedIn: false,
        token: 'wesewes'
    },
    reducers: {
        update: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        }
    }
})

export const { update } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
