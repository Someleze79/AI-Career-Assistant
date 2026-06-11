// Import Redux Toolkit functions
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// Import auth service functions
import * as authService from "../services/authService";

// User Type

interface User {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
}

// Get User From localStorage

const user: User | null =
  localStorage.getItem("user")
    ? JSON.parse(
        localStorage.getItem("user")!
      )
    : null;

// Auth State Types

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

// Initial State

const initialState: AuthState = {
  user,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Register User

export const register =
  createAsyncThunk(
    "auth/register",

    async (
      userData: any,
      thunkAPI
    ) => {

      try {

        return await authService.registerUser(
          userData
        );

      } catch (error: any) {

        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Registration failed";

        return thunkAPI.rejectWithValue(
          message
        );
      }
    }
  );

// Login User

export const login =
  createAsyncThunk(
    "auth/login",

    async (
      userData: any,
      thunkAPI
    ) => {

      try {

        return await authService.loginUser(
          userData
        );

      } catch (error: any) {

        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Login failed";

        return thunkAPI.rejectWithValue(
          message
        );
      }
    }
  );

// Auth Slice

const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {

    // Logout

    logout: (state) => {

      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },

    // Reset State

    reset: (state) => {

      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {

    builder

      // Register Pending

      .addCase(
        register.pending,
        (state) => {

          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.message = "";
        }
      )

      // Register Success

      .addCase(
        register.fulfilled,
        (
          state,
          action
        ) => {

          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
        }
      )

      // Register Failed

      .addCase(
        register.rejected,
        (
          state,
          action: any
        ) => {

          state.isLoading = false;
          state.isError = true;
          state.user = null;
          state.message =
            action.payload;
        }
      )

      // Login Pending

      .addCase(
        login.pending,
        (state) => {

          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.message = "";
        }
      )

      // Login Success

      .addCase(
        login.fulfilled,
        (
          state,
          action
        ) => {

          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
        }
      )

      // Login Failed

      .addCase(
        login.rejected,
        (
          state,
          action: any
        ) => {

          state.isLoading = false;
          state.isError = true;
          state.user = null;
          state.message =
            action.payload;
        }
      );
  },
});

// Exports

export const {
  logout,
  reset,
} = authSlice.actions;

export default authSlice.reducer;