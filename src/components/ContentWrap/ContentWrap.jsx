import React from "react";

export default function ContentWrap({ children }) {
  return (
    <div className="m-[15px] flex items-center rounded-lg bg-white p-[15px]">
      {children}
    </div>
  );
}
