import React from "react";

// Assets
import UserOne from "../../assets/Image/UserOne.png";

// Components
import ContentWrap from "../ContentWrap/ContentWrap";
import Image from "../Image/Image";
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

export default function Nav() {
  return (
    <nav className="w-[350px]">
      <div className="flex h-[90px] items-center px-[24px] pb-[8px]">
        <Logo />
      </div>

      <ContentWrap>
        <Image
          alt="UserAvatar"
          className="mr-[16px] h-[48px] w-[48px] rounded-full"
          src={UserOne}
        />
        <div className="flex flex-col">
          <span className="font-bold text-orange-500">Dmitry Klimenkov</span>
          <small className="font-normal text-slate-400">Design Engineer</small>
        </div>
      </ContentWrap>

      <NavigationMenu />
    </nav>
  );
}
