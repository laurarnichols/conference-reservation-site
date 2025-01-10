// store.js
import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./venueSlice";
import cateringReducer from "./cateringSlice";

export default configureStore({
  reducer: {
    venue: venueReducer,
    catering: cateringReducer,
  },
});
