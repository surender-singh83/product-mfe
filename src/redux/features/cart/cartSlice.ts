import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { addToCartProducts } from "../../../services/cart.service";
import type { AddToCartTypes, CartApiResponse, CartItem, CartProducts, CartState } from "../../../types/cart.types";

const getInitialCartItem = (): CartProducts[] => {
  try {
    const storedCart = localStorage.getItem("cartitems");

    return storedCart ? JSON.parse(storedCart) : [];
  } catch (err) {
    console.error("Failed to fetch items", err);
    return [];
  }
};

const initialState: CartState = {
  items: getInitialCartItem(),
  loading: false,
  error: null,
};

export const syncCartItem = createAsyncThunk<
  CartApiResponse,
  AddToCartTypes,
  { rejectValue: string }
>("cart/syncCartItem", async (payload, thunkAPI) => {
  try {
    const data = await addToCartProducts<AddToCartTypes, CartApiResponse>(
      payload,
    );

    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Something went wrong",
    );
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      console.log(state.items, initialState, action);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
    rollbackCart: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CartState>) => {
    builder
      .addCase(syncCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(syncCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        localStorage.setItem(
          "cartitems",
          JSON.stringify(action.payload.products),
        );
      })
      .addCase(syncCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export const {
  addToCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  rollbackCart,
} = cartSlice.actions;

export default cartSlice.reducer;
