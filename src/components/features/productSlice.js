import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  featureProducts: [],
  singleProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },

    addFeatureProduct: (state, action) => {
      state.featureProducts = action.payload.filter((elem) => {
        return elem.featured === true;
      });
    },

    addSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export const { addFeatureProduct, addProducts, addSingleProduct } =
  productSlice.actions;

export default productSlice.reducer;
