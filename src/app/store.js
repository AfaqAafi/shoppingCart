import { configureStore } from "@reduxjs/toolkit";
import incrementCartItem from "../features/cartSlice/cartSlice";
export const store = configureStore({
  reducer: {
    product: incrementCartItem,
  },
});
