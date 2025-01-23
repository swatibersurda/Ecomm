import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useReducerIntialState } from "../types/reducersIntialState";
import { User } from "../types/type";
// defined ts at userReducerIntialState and here we defined the value.
const initialState: useReducerIntialState = {
  user: null,
  loading: true,
};
export const useReducer = createSlice({
  name: "useReducer",
  initialState,
  reducers: {
    // type of user will be user.
    userExist: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});
export const { userExist, userNotExist } = useReducer.actions;
export const selectUser=(state:useReducerIntialState)=>state?.useReducer?.user
