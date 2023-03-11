import React from "react";
import FormInput from "./FormInput";

export default function Card() {
  return (
    <div className="card">
      <FormInput />
      <h2>Weather in City</h2>
      <h1>32°C</h1>
      <p>Cloudy</p>
      <p>Humidity: 60%</p>
    </div>
  );
}
