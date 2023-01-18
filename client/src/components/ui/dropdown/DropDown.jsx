import "./dropdown.scss";
import React, { useState } from "react";
import Input from "../../form elements/input/Input";

const DropDown = () => {
  const options = [
    "Fitness",
    "Events",
    "Food",
    "Nightlife",
    "Pets",
    "Shopping",
    "Others",
  ];
  const [selected, setSelected] = useState("");

  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleChange = (e) => {
    setSelected(e.target.value);

    const filtered = options.filter((option) =>
      option.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilteredOptions(filtered);

    console.log(selected, filteredOptions);
  };

  return (
    <div className="autocomplete-dropdown">
      <Input
        value={selected}
        onChange={handleChange}
        list="options"
        element="input"
        type="text"
        placeholder="Business Type"
        id="businesstype"
        className="form-control"
      />
      <datalist id="options">
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default DropDown;
