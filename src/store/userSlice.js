import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
      // return 'John Kim'
    },
    increase(state, action) {
      // 함수명(state데이터, action)
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions;
export default user;
