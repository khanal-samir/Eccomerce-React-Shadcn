import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import ProductSlice from "./ProductSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    product: ProductSlice,
  },
});
