import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const itemExists = state.products.find(
        (item) => item.$id === action.payload.$id,
      );
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.$id !== action.payload,
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.$id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
  },
});

export const { setCart, removeCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
