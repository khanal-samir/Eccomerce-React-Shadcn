import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userInfo: null,
  products: [],
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userInfo = action.payload;
      console.log(state.userInfo);
    },
    logout: (state) => {
      state.status = false;
      state.userInfo = null;
    },
  },
});
export const { login, logout } = ProductSlice.actions;
export default ProductSlice.reducer;
