import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartSlicetype = {
  products: EcomItem[];
};

const initialState: cartSlicetype = {
  products: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<EcomItem>) => {
      state.products.push(action.payload);
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
