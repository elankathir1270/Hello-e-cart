import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    collect: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { collect, remove } = productSlice.actions;
