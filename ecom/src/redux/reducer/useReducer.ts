import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { useReducerIntialState } from "../types/reducersIntialState";
// defined ts at userReducerIntialState and here we defined the value.
const initialState:useReducerIntialState={
 user:null,
 loading:true   
}
export const useReducer=createSlice({
    name:"useReducer",
    initialState,
    reducers:{

    }
})
export const {}=useReducer.actions
