import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: {
    isLoggedIn: false,
    uid: "",
    name: "",
  },
  reducers: {
    update: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
    },
  },
});

export const { update } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
