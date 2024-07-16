import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/features/productSlice";
("../components/features/productSlice");

export const store = configureStore({
  
  reducer: productSlice,

  
});


// https://api.pujakaitem.com/api/products 