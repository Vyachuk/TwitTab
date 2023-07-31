import { createSlice } from "@reduxjs/toolkit";
import { getAllCardsThunk } from "./userOperation";

const initialState = {
  allCards: [],
  followingCards: [],
};

const userSlice = createSlice({
  name: "cartUser",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCardsThunk.fulfilled, (state, { payload }) => {
      state.allCards = payload;
    });
  },
});

export const userReducer = userSlice.reducer;
