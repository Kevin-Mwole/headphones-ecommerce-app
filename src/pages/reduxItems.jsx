import { createSlice } from "@reduxjs/toolkit";

export const xx99miiQuantitySlice = createSlice({
  name: "xx99miiQuantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setXx99MiiQuantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const xx99miQuantitySlice = createSlice({
  name: "xx99miQuantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setXx99MiQuantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const xx59QuantitySlice = createSlice({
  name: "xx59Quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setXx59Quantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const zx9QuantitySlice = createSlice({
  name: "zx9Quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setZx9Quantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const zx7QuantitySlice = createSlice({
  name: "zx7Quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setZx7Quantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const Yx1QuantitySlice = createSlice({
  name: "Yx1Quantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setYx1Quantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  setXx99MiiQuantity,
  setXx99MiQuantity,
  setXx59Quantity,
  setZx9Quantity,
  setZx7Quantity,
  setYx1Quantity,
} = {
  ...xx99miiQuantitySlice.actions,
  ...xx99miQuantitySlice.actions,
  ...xx59QuantitySlice.actions,
  ...zx9QuantitySlice.actions,
  ...zx7QuantitySlice.actions,
  ...Yx1QuantitySlice.actions,
};

export const selectXx99MiiQuantity = (state) => state.xx99miiQuantity.value;
export const selectXx99MiQuantity = (state) => state.xx99miQuantity.value;
export const selectXx59Quantity = (state) => state.xx59Quantity.value;
export const selectZx9Quantity = (state) => state.zx9Quantity.value;
export const selectZx7Quantity = (state) => state.zx7Quantity.value;
export const selectYx1Quantity = (state) => state.Yx1Quantity.value;

export default {
  xx99miiQuantity: xx99miiQuantitySlice.reducer,
  xx99miQuantity: xx99miQuantitySlice.reducer,
  xx59Quantity: xx59QuantitySlice.reducer,
  zx9Quantity: zx9QuantitySlice.reducer,
  zx7Quantity: zx7QuantitySlice.reducer,
  Yx1Quantity: Yx1QuantitySlice.reducer,
};
