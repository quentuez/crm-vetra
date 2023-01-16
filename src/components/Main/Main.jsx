import React from "react";

// Components
import Content from "../Content/Content";

export default function Main() {
  return (
    <main className="flex p-[24px]">
      <Content className="w-1/3" />
      <Content className="w-2/3" />
    </main>
  );
}