import classNames from "classnames";
import React from "react";

function Button({ bgColor, textColor, size, type, children }) {
  return (
    <button
      className={classNames(`bg-${bgColor} text-${textColor}`, {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
      })}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
