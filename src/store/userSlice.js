import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, signupUserAPI } from "./api"; // Import your API functions
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Thunk function for user login
export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/login"); // Call your login API function
      return response.data; // Assuming the API returns user data upon successful login
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);

// Thunk function for user signup
export const signupUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/register"); // Call your signup API function
      return response.data; // Assuming the API returns user data upon successful signup
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
