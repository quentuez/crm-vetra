import React from "react";

export default function ContentWrap({ children, className }) {
  return <div className={className}>{children}</div>;
}
