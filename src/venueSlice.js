// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { venueData } from "./venueData";
import { avData } from "./avData";

export const venueSlice = createSlice({
  name: "venue",
  initialState: {
    venueLocations: venueData,
    avOptions: avData,
  },
  reducers: {
    incrementVenueCount: (state, action) => {
      const { storeKey, index } = action.payload;
      if (state[storeKey]?.options[index]) {
        if (
          state[storeKey].options[index].name === "Auditorium Hall" &&
          state[storeKey].options[index].count >= 3
        ) {
          return;
        }
        state[storeKey].options[index].count++;
      }
    },
    decrementVenueCount: (state, action) => {
      const { storeKey, index } = action.payload;
      if (state[storeKey]?.options[index]) {
        if (state[storeKey].options[index].count <= 0) {
          return;
        }
        state[storeKey].options[index].count--;
      }
    },
  },
});

export const { incrementVenueCount, decrementVenueCount } = venueSlice.actions;

export default venueSlice.reducer;
