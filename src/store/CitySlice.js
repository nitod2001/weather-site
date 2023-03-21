import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { IDLE, LOADING, REJECTED } from "../constants";

var inittialCity = {
  status: "",
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
      const city = action.payload;
      const cityCapilized = city.charAt(0).toUpperCase() + city.slice(1); // capilized the cities
      state = { ...state, cityName: cityCapilized };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = REJECTED;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = IDLE;
        const Cityinfor = action.payload;
        const temparature = Cityinfor.main.temp - 273.15;
        const humidity = Cityinfor.main.humidity;
        const weather = Cityinfor.weather[0].main;
        state.temparature = temparature.toFixed(2);
        state.humidity = humidity;
        state.weather = weather;
      });
  },
});

export const Cityactions = CitySlice.actions;
export default CitySlice;

export const fetchCity = createAsyncThunk(
  "city/fetchCity",
  async (cityname) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bfe167c8a78c6754d567fe2cafdcf14f`
    );
    // console.log(res);
    const data = await res.json();
    // return data;
    // console.log(data);

    if (!res.ok) {
      return rejected;
    } else {
      return data;
    }
  }
);
