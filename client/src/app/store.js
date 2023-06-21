import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoSlice.jsx";
import { apiSlice } from "../features/api/apiSlice.jsx";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
