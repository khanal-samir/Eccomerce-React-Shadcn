import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userInfo: null,
  products: [],
  //filteredProducts: [], // for Cat and coll
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

    allProduct: (state, action) => {
      state.products = action.payload;
    },
    // showProduct: (state, action) => {
    //   state.filteredProducts = state.products.filter(
    //     (product) =>
    //       product.Category.toLowerCase() === action.payload.toLowerCase() ||
    //       product.Collection.toLowerCase() === action.payload.toLowerCase(),
    //   );
    // },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.$id === action.payload.$id ? action.payload : product,
      );
    },
    rmProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.$id !== action.payload,
      );
    },

    logout: (state) => {
      state.status = false;
      state.userInfo = null;
    },
  },
});
export const {
  login,
  logout,
  allProduct,
  addProduct,
  rmProduct,
  showProduct,
  updateProduct,
} = ProductSlice.actions;
export default ProductSlice.reducer;
