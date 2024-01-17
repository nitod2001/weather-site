const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialCities = [];

const citiesSlice = createSlice({
  name: "citiesList",
  initialState: initialCities,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state = state.push(...action.payload);
    });
  },
});

export default citiesSlice;

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (dispatch, getState) => {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await res.json();
    const Cityarray = [];
    data.data.map((item) => {
      // console.log(item.country);
      Cityarray.push(...item.cities);
    });
    return Cityarray;
  }
);
