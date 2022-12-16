import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginStatusReducer";

const store = configureStore({
    reducer: {
        loginStatus: loginStatusReducer
    }
})

export { store }