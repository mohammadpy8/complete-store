import React from "react";

import "./Input.css";

const Input = (props) => {
    
  const changeHandler = (event) => console.log(event.target.value);

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={props.className}
        onChange={changeHandler}
      />
    );

  return <>{element}</>;
};

export default Input;
