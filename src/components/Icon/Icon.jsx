import React from "react";

export default function Icon({
  alt,
  className = "max-w-none",
  size = 24,
  src,
}) {
  return (
    <img alt={alt} className={className} height={size} src={src} width={size} />
  );
}
