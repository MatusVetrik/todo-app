import { configureStore } from "@reduxjs/toolkit";
import { todosListReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    todosListReducer: todosListReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
