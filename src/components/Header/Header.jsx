import React from "react";

// Components
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

// Styles
import "../../index.css";

// Assets
import LogoVerta from "../Logo/LogoVerta.png";
import notification from "../Icon/notification.png"; //https://www.flaticon.com/free-icon/notification_2645897
import plus from "../Icon/plus.png"; // https://www.flaticon.com/ru/free-icon/plus_3303893
import search from "../Icon/search.png"; // https://www.flaticon.com/free-icon/search_711319
import shoppingCart from "../Icon/shoppingCart.png"; // https://www.flaticon.com/free-icon/shopping-cart_1170678

function Header() {
  return (
    <header class="flex flex-row">
      <Logo
        class="hover:cursor-pointer"
        src={LogoVerta}
        alt="Logo"
        width="100"
        height="100"
      />
      <h1 class="text-2xl font-medium">Overview</h1>
      <form>
        <input type="search" id="mySearch" name="q" />
        <Button>
          <Icon
            class="h-3.5 w-3.5"
            src={search}
            alt="Search"
            width="14"
            height="14"
          />
        </Button>
      </form>
      <Icon
        class="h-4.5 w-4.5"
        src={notification}
        alt="Notification"
        width="19"
        height="19"
      />
      <Icon
        class="h-4.5 w-4.5"
        src={shoppingCart}
        alt="Shopping Cart"
        width="19"
        height="19"
      />
      <Button>
        <Icon
          class="h-4.5 w-4.5"
          src={plus}
          alt="Plus"
          width="19"
          height="19"
        />
      </Button>
    </header>
  );
}

export default Header;
