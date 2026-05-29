import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProductData } from "../../../types/product.types";
import { fetchProducts } from "../../../services/product.service";

const initialState: ProductData = {
  products: {
    product: [],
    total: 1,
  },
};

export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async ({
    searchKey,
    count,
  }: {
    searchKey: string | null | undefined;
    count: number;
  }) => {

    const data = await fetchProducts({ searchKey, pageParam: count });
    return data;
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Data is fetching throgh asyn function so extra reducer is used
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      if (action.meta.arg.count == 0) {
        state.products.product = action.payload.products;
      } else {
        state.products.product = [
          ...state.products.product,
          ...action.payload.products,
        ];
      }

      state.products.total = action.payload.total;
    });
  },
});

export default productSlice.reducer;
