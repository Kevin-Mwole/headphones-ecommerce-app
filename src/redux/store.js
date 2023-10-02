import { configureStore } from "@reduxjs/toolkit";
import reducers from "../pages/reduxItems"; // Import the combined reducers

export const store = configureStore({
  reducer: reducers,
});
