import React from "react";

function Button(props, { type, children }) {
  return (
    <button class={props.class} type={type}>
      {children}
    </button>
  );
}

export default Button;
