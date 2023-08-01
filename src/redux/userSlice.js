import { createSlice } from "@reduxjs/toolkit";
import { editCardThunk, getAllCardsThunk } from "./userOperation";

const initialState = {
  allCards: [],
  followingCards: [],
};

const userSlice = createSlice({
  name: "cartUser",
  initialState,
  reducers: {
    addCartToFollowingList: (state, { payload }) => {
      state.followingCards.push(payload);
    },
    removeCartFromFollowingList: (state, { payload }) => {
      const indexOf = state.followingCards.indexOf(payload);
      state.followingCards.splice(indexOf, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCardsThunk.fulfilled, (state, { payload }) => {
        state.allCards = payload;
      })
      .addCase(editCardThunk.fulfilled, (state, { payload }) => {
        state.allCards[payload.id - 1] = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { addCartToFollowingList, removeCartFromFollowingList } =
  userSlice.actions;
