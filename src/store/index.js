import { configureStore } from "@reduxjs/toolkit";
import CitySlice from "./CitySlice";

const store = configureStore({
  reducer: { city: CitySlice.reducer },
});

export default store;
