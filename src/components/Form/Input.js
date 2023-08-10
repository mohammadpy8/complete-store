import React, { useEffect, useReducer } from "react";
import validator from "../../Validators/Validator";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        inValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

const Input = (props) => {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    inValid: false,
  });
    
    const { value, inValid } = mainInput;
    const { id, onInputHandler } = props;
    
    useEffect(() => {

        onInputHandler(id, value, inValid);

    }, [value]);

  const changeHandler = (event) =>
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      inValid: true,
      validations: props.validations,
    });

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.inValid ? "success" : "error"
        }`}
        value={mainInput.value}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.inValid ? "success" : "error"
        }`}
        value={mainInput.value}
        onChange={changeHandler}
      />
    );

  return <>{element}</>;
};

export default Input;
