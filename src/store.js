import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterReducer";
import { userSlice } from "./reducers/userReducer";
import { productSlice } from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    counter: counterSlice.reducer,
    product: productSlice.reducer,
  },
});
