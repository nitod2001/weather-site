import React from "react";
import { useSelector } from "react-redux";
import FormInput from "./FormInput";

export default function Card() {
  const stateCity = useSelector((state) => state.city);
  console.log(stateCity);

  return (
    <div className="card">
      <FormInput />
      <h2>Weather in {stateCity.cityName}</h2>
      <h1>{stateCity.temparature}°C</h1>
      <p>{stateCity.weather}</p>
      <p>Humidity: {stateCity.humidity}%</p>
    </div>
  );
}
