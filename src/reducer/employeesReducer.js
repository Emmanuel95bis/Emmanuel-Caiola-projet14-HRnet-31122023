import { createSlice } from "@reduxjs/toolkit";

import { employees } from "../datas/Employees";

const initialState = {
  isEmployee: [...employees],
};

const employeeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.isEmployee = [...state.isEmployee, newEmployee];
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
