import { createSlice } from "@reduxjs/toolkit";

export const formhandleslice = createSlice({
  name: "curd",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    editeUser: (state, action) => {
      debugger;
      const { id } = action.payload;
      const userinfo = state.findIndex((item) => item.id === id);
      state[userinfo] = action.payload;
    },
    deleteuser: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});
export const formHandleActions = formhandleslice.actions;
export default formhandleslice.reducer;
