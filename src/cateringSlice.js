// cateringSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { cateringData } from "./cateringData";

export const cateringSlice = createSlice({
  name: "catering",
  initialState: {
    numPeople: 0,
    cateringCost: 0,
    options: cateringData,
  },
  reducers: {
    incrementCateringCount: (state, action) => {
      const index = action.payload;
      if (state.options[index]) {
        state.options[index].count++;
        // Increase the catering cost
        state.cateringCost += state.options[index].price * state.numPeople;
      }
    },
    decrementCateringCount: (state, action) => {
      const index = action.payload;
      if (state.options[index]) {
        if (state.options[index].count <= 0) {
          return;
        }
        state.options[index].count--;
        // Decrease the catering cost
        state.cateringCost -= state.options[index].price * state.numPeople;
      }
    },
    // Update the number of people
    setNumPeople: (state, action) => {
      state.numPeople = action.payload;
      // Calculate the total cost
      state.cateringCost = state.options.reduce((acc, option) => {
        return acc + option.count * option.price * state.numPeople;
      }, 0);
    },
  },
});

export const { incrementCateringCount, decrementCateringCount, setNumPeople } =
  cateringSlice.actions;

export default cateringSlice.reducer;
