import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const inittialCity = {
  cityName: "",
  temparature: 0,
  weather: "Rain",
  humidity: 0,
};

const CitySlice = createSlice({
  name: "city",
  initialState: inittialCity,
  reducers: {
    changeCityState(state, action) {
      state = { ...state, cityName: action.payload };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      console.log(action.payload);
      const Cityinfor = action.payload;
      const temparature = Cityinfor.main.temp - 273.15;
      const humidity = Cityinfor.main.humidity;
      const weather = Cityinfor.weather[0].main;
      state.temparature = temparature;
      state.humidity = humidity;
      state.weather = weather;
    });
  },
});

export const Cityactions = CitySlice.actions;
export default CitySlice;

export const fetchCity = createAsyncThunk(
  "city/fetchCity",
  async (dispatch, getState) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=bfe167c8a78c6754d567fe2cafdcf14f`
    );
    const data = await res.json();
    return data;
  }
);
