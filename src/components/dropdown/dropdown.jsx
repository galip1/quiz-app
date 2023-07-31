import React from "react";
import "./dropdown.css";

const Dropdown = ({ data, setDifficultyChange }) => {
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="dropdown">
      <select
        name=""
        id=""
        onChange={(e) => setDifficultyChange(e.target.value)}
      >
        {data.map((item, i) => (
          <option key={i} value={item}>
            {capitalizeFirstLetter(item)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
