import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { AuthApi } from "./api/authApi";
import { bookingApi } from "./api/bookingApi";
import { userApi } from "./api/userApi";
import { roomApi } from "./api/roomApi";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthApi.middleware,
      userApi.middleware,
      bookingApi.middleware,
      roomApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
