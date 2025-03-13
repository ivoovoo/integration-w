import { createSlice } from "@reduxjs/toolkit";
import { emojis } from "../config/emojis";

const usersSlice = createSlice({
  name: "USERS",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(emojis[Math.floor(Math.random() * emojis.length)]);
      return state;
    },
  },
});

export default usersSlice.reducer;
export const { addItem } = usersSlice.actions;
