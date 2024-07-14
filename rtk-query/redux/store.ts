import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/noteSlice";
import { api } from "./slices/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    noteSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
