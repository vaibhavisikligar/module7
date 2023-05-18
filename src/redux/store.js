import { configureStore } from "@reduxjs/toolkit";
import formHandleingSlice from "../redux/formHandleingSlice";

const store = configureStore({
  reducer: {
    formdata: formHandleingSlice,
  },
});
export default store;
