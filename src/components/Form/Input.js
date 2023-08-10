import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                inValid: action.inValid,
            }
        }
        default: {
            return state
        }
    }
}

const Input = (props) => {

  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    inValid: false,
  });

  const changeHandler = (event) => dispatch({type : "CHANGE", value: event.target.value, inValid: true});

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.inValid ? "success" : "error"}`}
        value={mainInput.value}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${mainInput.inValid ? "success" : "error"}`}
        value={mainInput.value}
        onChange={changeHandler}
      />
    );

  return <>{element}</>;
};

export default Input;
