import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { AuthApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([AuthApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
