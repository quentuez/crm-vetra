import React from "react";

function Button(props, { type, children }) {
  return (
    <button className={props.class} type={type}>
      {children}
    </button>
  );
}

export default Button;
