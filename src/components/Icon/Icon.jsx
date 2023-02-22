import React from "react";

export default function Icon({
  alt,
  className = "max-w-none",
  size = 14,
  src,
}) {
  return (
    <img alt={alt} className={className} src={src} width={size} height={size} />
  );
}
