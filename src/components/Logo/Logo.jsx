import React from "react";

export default function Logo({ alt, className, height, src, width }) {
  return (
    <img
      alt={alt}
      className={className}
      height={height}
      src={src}
      width={width}
    />
  );
}
