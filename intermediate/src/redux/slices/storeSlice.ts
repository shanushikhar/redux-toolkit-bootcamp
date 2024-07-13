import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataAsyncThunk = createAsyncThunk<EcomItem[], void>(
  "fetch/storeitems",
  async (body, thunkApi) => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      return response.data;
    } catch (error: any) {
      const { message } = error;
      return message;
    }
  }
);

type storeSliceType = {
  products: Array<EcomItem>;
  loading: boolean;
  error: string | undefined;
};

const initialState: storeSliceType = {
  products: [],
  loading: false,
  error: "",
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<EcomItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchDataAsyncThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProducts } = storeSlice.actions;

export default storeSlice.reducer;
