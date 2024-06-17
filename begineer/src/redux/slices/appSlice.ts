import { createSlice } from "@reduxjs/toolkit";

interface appSliceType {
  count: number;
  number: number;
}

const initialState: appSliceType = { count: 0, number: 1 };

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    byNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { increment, decrement, byNumber } = appSlice.actions;

export default appSlice.reducer;
