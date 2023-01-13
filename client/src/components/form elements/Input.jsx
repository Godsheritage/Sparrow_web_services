import "./input.scss";
// import {
//   reducerStateTypes,
//   reducerActionTypes,
//   inputPropTypes,
// } from "../../types";
// import { validate } from "../util/validators";
// import { useReducer, useEffect } from "react";

const Input = ({
  element,
  type,
  id,
  multiple,
  label,
  onFocus,
  changeHandler,
  //   errorText,
  placeholder,
  className,
}) => {
  const elements =
    element === "input" ? (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        multiple={multiple}
        onFocus = {onFocus}
        // value={inputState.value}
        onChange={changeHandler}
        // onBlur={touchHandlander}
      />
    ) : (
      <textarea
        id={id}
        rows={3}
        placeholder={placeholder}
        className={className}
        // value={inputState.value}
        onChange={changeHandler}
        // onBlur={touchHandlander}
      />
    );
  return (
    <div>
      {label && <label htmlFor={id}>{placeholder}</label>}
      {elements}
      {/* {isValid && inputState.isTouched && <p>{errorText}</p>} */}
    </div>
  );
};

export default Input;
