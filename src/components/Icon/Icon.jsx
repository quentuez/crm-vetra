import React from "react";

function Icon(props) {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}

export default Icon;
