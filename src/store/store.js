import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import ProductSlice from "./ProductSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    product: ProductSlice,
    cart: cartSlice,
  },
});
