import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cart/cartSlice";
import productReducer from "./features/product/productSlice";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import useStore from "./hooks/useStore";

const store = configureStore({
  reducer: {
    cart: cardReducer,
    product: productReducer,
  },
});

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useStore, store, StoreProvider };
