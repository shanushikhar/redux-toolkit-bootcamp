import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type storeSliceType = {
  products: Array<EcomItem>;
  loading: boolean;
};

const initialState: storeSliceType = {
  products: [],
  loading: false,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<EcomItem[]>) => {
      state.products = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { updateProducts, loading } = storeSlice.actions;

export default storeSlice.reducer;
