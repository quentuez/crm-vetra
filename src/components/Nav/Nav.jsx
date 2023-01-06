import React from "react";

// Assets
import logo from "../Logo/logo.svg";

// Components
import Logo from "../Logo/Logo";
import UserCard from "../UserCard/UserCard";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

export default function Nav() {
  return (
    <nav>
      <div className="flex h-[90px] items-center px-[20px]">
        <Logo
          alt="Logo"
          className="hover:cursor-pointer"
          height="24"
          src={logo}
          width="100"
        />
      </div>

      <UserCard />

      <NavigationMenu />
    </nav>
  );
}
