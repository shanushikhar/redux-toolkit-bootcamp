import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    appReducer: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
