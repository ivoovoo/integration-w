import { createSlice } from "@reduxjs/toolkit";
import { emojis } from "../config/emojis";

const usersSlice = createSlice({
  name: "USERS",
  initialState: {
    data: [],
    active: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.data = state.data.map((item) => ({
        ...item,
        active: false,
      }));

      const newUser = {
        active: true,
        date: action.payload.date,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };

      state.data.unshift(newUser);
      state.active = newUser;

      return state;
    },
    changeActive: (state, action) => {
      const i = action.payload;
      state.data = state.data.map((item, index) => {
        if (index == i) {
          state.active = item;
        }
        return {
          ...item,
          active: i === index,
        };
      });

      return state;
    },
  },
});

export default usersSlice.reducer;
export const { addItem, changeActive } = usersSlice.actions;
