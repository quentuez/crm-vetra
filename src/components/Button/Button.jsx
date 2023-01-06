import React from "react";

export default function Button({ className, type = "button", children }) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
