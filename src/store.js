import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeStock(state, action) {
      let 번호 = state.findIndex((a) => {
        //어레이에서 특정값 찾기
        return a.id === action.payload;
      });

      state[번호].count += 1;
    },

    addItem(state, action) {
      // state.push({ id: 1, name: "Red Knit, count : 1" });
      state.push(action.payload);
    },
  },
});

export let { changeStock, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
