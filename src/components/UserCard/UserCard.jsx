import React from "react";

import UserOne from "./UserOne.png";

export default function UserCard() {
  return (
    <div className="m-[15px] flex items-center rounded-lg bg-white p-[15px]">
      <img
        alt="UserAvatar"
        className="mr-[16px] h-[48px] w-[48px] rounded-full"
        src={UserOne}
      />
      <div className="flex flex-col">
        <span className="font-bold text-orange-500">Dmitry Klimenkov</span>
        <small className="font-normal text-slate-400">Design Engineer</small>
      </div>
    </div>
  );
}
