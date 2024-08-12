import { createSlice } from "@reduxjs/toolkit";

// Load the theme from local storage, or default to 'light' if not present
const initialState = localStorage.getItem("theme") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkTheme: (state) => {
      localStorage.setItem("theme", "dark");
      return "dark";
    },
    lightTheme: (state) => {
      localStorage.setItem("theme", "light");
      return "light";
    },
  },
});

export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;
