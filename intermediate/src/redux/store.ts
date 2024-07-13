import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";

export const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
