import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cardService from "./cardService";

const initialState = {
  cards: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createCard = createAsyncThunk(
  "cards/create",
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await cardService.createCard(cardData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCard= createAsyncThunk(
  "goals/update",
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await cardService.updateGoal(cardData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCard = createAsyncThunk(
  "cards/getAll",
   async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.admin.token;
    // console.log(token)
    return await cardService.getCard(token);
    
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards.push(action.payload);
      })
      .addCase(createCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = [...state.cards.filter(card => card._id !== action.payload._id), action.payload]
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = action.payload;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cardSlice.actions;

export default cardSlice.reducer;
