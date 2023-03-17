import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Cityactions, fetchCity } from "../store/CitieSlice";

export default function FormInput() {
  const dispatch = useDispatch();
  const [inputCity, setInputCity] = useState("");
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const inputChangeHandler = (e) => {
    setInputCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Cityactions.changeCityState(inputCity));
    dispatch(fetchCity());
    setInputCity("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        required
        onChange={inputChangeHandler}
        type="text"
        placeholder="Search"
        value={inputCity}
      />
      <div className="options-block">
        <div className="option-item">VietNam</div>
        <div className="option-item">Vatican</div>
        <div className="option-item">Vatican</div>
        <div className="option-item">Vatican</div>
        <div className="option-item">Vatican</div>
      </div>
      <button type="submit">{searchIcon}</button>
    </form>
  );
}
