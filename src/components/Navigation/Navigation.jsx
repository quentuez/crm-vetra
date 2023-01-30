import React from "react";

// Assets
import UserOne from "../../assets/Image/UserOne.png";

// Components
import ContentWrap from "../ContentWrap/ContentWrap";
import Image from "../Image/Image";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

export default function Navigation() {
  return (
    <nav className="w-[350px]">
      <div className="flex h-[90px] items-center px-6 pb-2">
        <Logo />
      </div>

      <ContentWrap>
        <a className="hover: flex cursor-pointer items-center">
          <Image
            alt="User Avatar"
            className="mr-4 h-12 w-12 rounded-full"
            src={UserOne}
          />
          <div className="flex flex-col">
            <span className="font-bold text-orange-500 ">Dmitry Klimenkov</span>
            <small className="font-normal text-slate-400">
              Design Engineer
            </small>
          </div>
        </a>
      </ContentWrap>

      <Menu />
    </nav>
  );
}
