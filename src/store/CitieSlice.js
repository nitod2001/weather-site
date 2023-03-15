import { createSlice } from "@reduxjs/toolkit";

const inittialCity = {
  cityName: "",
  temparature: 0,
  weather: "",
  humidity: 0,
};

const CitySlice = createSlice({
  name: "city",
  initialState: inittialCity,
  reducers: {
    changeCity(state, action) {
      return (state.cityName = action.payload);
    },
    changeTemparature(state, action) {
      return (state.temparature = action.payload);
    },
    changeWeather(state, action) {
      return (state.temparature = action.payload);
    },
    changeHumidity(state, action) {
      return (state.humidity = action.payload);
    },
  },
});

export const Cityactions = CitySlice.actions;
export default CitySlice;
