import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const { reducer, actions } = ProductsSlice;
export const { setProducts } = actions;
export default reducer;
