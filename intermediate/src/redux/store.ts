import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    storeSlice,
    cartSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
