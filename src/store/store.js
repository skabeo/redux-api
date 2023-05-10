import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

export default store;