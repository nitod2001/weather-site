import React, { useEffect, useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Cityactions, fetchCity } from "../store/CitySlice";

export default function FormInput() {
  const stateCitiesList = useSelector((state) => state.cities);
  const [newArrayOfCities, setNewArrayOfCities] = useState([]);

  const dispatch = useDispatch();
  const [inputCity, setInputCity] = useState("");
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  const inputChangeHandler = (e) => {
    setInputCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Cityactions.changeCityState(inputCity));
    dispatch(fetchCity(inputCity));
    setInputCity("");
  };

  // const OptionItemClickHandler = (value) => {
  //   setInputCity(value);
  // };

  useEffect(() => {
    setNewArrayOfCities([]);
    for (const city of stateCitiesList) {
      if (
        city.toLowerCase().startsWith(inputCity.toLowerCase()) &&
        inputCity !== ""
      ) {
        const newCity =
          city.substr(0, inputCity.length) + city.substr(inputCity.length); // get the city with header of string + footer of string
        // console.log(newCity);
        setNewArrayOfCities((prevState) => [...prevState, city]);
      }
    }
  }, [inputCity]);
  // console.log(newArrayOfCities);

  const newArrayOfCitiesBlock = newArrayOfCities.map((item, index) => {
    if (index < 6) {
      return (
        <div
          className="option-item"
          onClick={() => {
            setNewArrayOfCities([]);
            setInputCity(item);
          }}
          key={Math.random()}
        >
          {item}
        </div>
      );
    }
  });

  return (
    <form onSubmit={submitHandler}>
      <input
        required
        onChange={inputChangeHandler}
        // onBlur={() => {
        //   setNewArrayOfCities([]);
        // }}
        type="text"
        placeholder="Search"
        value={inputCity}
      />
      <ul className="options-block">{newArrayOfCitiesBlock}</ul>
      <button type="submit">{searchIcon}</button>
    </form>
  );
}
