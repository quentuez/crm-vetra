import { createPortal } from "react-dom";
import { useState } from "react";
import React from "react";

// Assets
import UserOne from "../../assets/Image/UserOne.png";

// Components
import ContentWrap from "../ContentWrap/ContentWrap";
import Image from "../Image/Image";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import NavigationModalContent from "../NavigationModalContent/NavigationModalContent";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="w-[350px]">
      <div className="flex h-[90px] items-center px-6 pb-2">
        <Logo />
      </div>

      <ContentWrap className="m-4 rounded-lg bg-white p-4">
        <a
          className="hover: flex cursor-pointer items-center"
          onClick={() => setShowModal(true)}
        >
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
        {showModal &&
          createPortal(
            <NavigationModalContent onClose={() => setShowModal(false)} />,
            document.body
          )}
      </ContentWrap>

      <Menu />
    </nav>
  );
}
