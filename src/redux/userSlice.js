import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { editCardThunk, getAllCardsThunk } from "./userOperation";

const initialState = {
  allCards: [],
  followingCards: [],
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state) => {
  state.isLoading = false;
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
        state.isLoading = false;
      })
      .addCase(editCardThunk.fulfilled, (state, { payload }) => {
        state.allCards[payload.id - 1] = payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getAllCardsThunk.pending, editCardThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getAllCardsThunk.rejected, editCardThunk.rejected),
        handleRejected
      );
  },
});

export const userReducer = userSlice.reducer;
export const { addCartToFollowingList, removeCartFromFollowingList } =
  userSlice.actions;
