import React from "react";

// Components
import Logo from "../Logo/Logo";

// Assets
import logo from "../Logo/logo.svg";

function Nav() {
  return (
    <div>
      {" "}
      <Logo
        className="hover:cursor-pointer"
        src={logo}
        alt="Logo"
        width="100"
        height="32"
      />
    </div>
  );
}

export default Nav;
