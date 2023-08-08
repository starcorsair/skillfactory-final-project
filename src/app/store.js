import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "../components/Utilities/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
