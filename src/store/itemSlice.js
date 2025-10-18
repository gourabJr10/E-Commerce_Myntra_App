import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../../../1-pre-built-bundle/old-clone/data/item";

const itemSlice = createSlice({
  name : 'items',
  initialState : [],
  reducers : {
    addInitialItems : (state,action) => {
        return action.payload;
    }

  }
});


export const itemActions = itemSlice.actions;

export default itemSlice;