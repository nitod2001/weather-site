import { configureStore } from "@reduxjs/toolkit";
import CitySlice from "./CitieSlice";

const store = configureStore({
  reducer: { city: CitySlice.reducer },
});

export default store;
