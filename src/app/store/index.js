import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../../features/Users";


export const store = configureStore({
    reducer: {
        users:usersSlice
    }
})


