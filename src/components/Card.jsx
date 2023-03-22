import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, LOADING, REJECTED } from "../constants";
import { fetchCities } from "../store/CitiesSlice";
import FormInput from "./FormInput";
import {
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card() {
  const stateCity = useSelector((state) => state.city);
  // console.log(stateCity);
  const status = stateCity.status;
  // console.log(status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const cloudWeather = stateCity.weather.toLowerCase() === "clouds" && (
    <FontAwesomeIcon icon={faCloud} />
  );
  const rainWeather = stateCity.weather.toLowerCase() === "rain" && (
    <FontAwesomeIcon icon={faCloudRain} />
  );
  const snowWeather = stateCity.weather.toLowerCase() === "snow" && (
    <FontAwesomeIcon icon={faSnowflake} />
  );
  const clearWeather = stateCity.weather.toLowerCase() === "clear" && (
    <FontAwesomeIcon icon={faSun} />
  );
  const weatherList = [clearWeather, cloudWeather, snowWeather, rainWeather];

  return (
    <div className="card">
      <FormInput />
      {status === "" && <h1>Please type the City to get its weather.</h1>}
      {status === LOADING && <h1>Loading...</h1>}
      {status === IDLE && (
        <>
          <h2>Weather in {stateCity.cityName}</h2>
          <h1>{stateCity.temparature}°C</h1>
          <p>
            Weather: {weatherList} {stateCity.weather}
          </p>
          <p>Humidity: {stateCity.humidity}%</p>{" "}
        </>
      )}
      {status === REJECTED && <h1>Not Found the City</h1>}
    </div>
  );
}
