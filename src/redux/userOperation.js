import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCards, fetchEditCard } from "../services/API/api";

export const getAllCardsThunk = createAsyncThunk(
  "getAllCards",
  async (_, { rejectedWithValue }) => {
    try {
      const data = await fetchAllCards();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const editCardThunk = createAsyncThunk(
  "editCard",
  async (payload, { rejectedWithValue }) => {
    try {
      const data = await fetchEditCard(payload);

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
