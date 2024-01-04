import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/employeesReducer";

export const store = configureStore({
  reducer: {
    employees: reducer,
  },
});
