import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormInput() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <form>
      <input type="text" placeholder="Search" />
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
