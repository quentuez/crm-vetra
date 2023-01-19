import React from "react";

export default function Image({ alt, className, children, src }) {
  return (
    <img alt={alt} className={className} src={src}>
      {children}
    </img>
  );
}
