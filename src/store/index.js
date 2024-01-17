import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from "./CitiesSlice";
import CitySlice from "./CitySlice";

const store = configureStore({
  reducer: { city: CitySlice.reducer, cities: citiesSlice.reducer },
});

export default store;
