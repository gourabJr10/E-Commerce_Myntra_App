import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import wishlistSlice from "./wishlistSlice";

const myntraStore = configureStore({
  reducer : {
     items : itemSlice.reducer,
     fetchStatus : fetchStatusSlice.reducer,
     bag : bagSlice.reducer,
     wishlist : wishlistSlice.reducer
  }
});

export default myntraStore;