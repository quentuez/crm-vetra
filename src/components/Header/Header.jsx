import React from "react";

// Components
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

// Styles
import "../../index.css";

// Assets
import notification from "../Icon/notification.png"; //https://www.flaticon.com/free-icon/notification_2645897
import plus from "../Icon/plus.png"; // https://www.flaticon.com/ru/free-icon/plus_3303893
import search from "../Icon/search.png"; // https://www.flaticon.com/free-icon/search_711319
import shoppingCart from "../Icon/shoppingCart.png"; // https://www.flaticon.com/free-icon/shopping-cart_1170678

function Header() {
  return (
    <header className="flex h-[90px] flex-row">
      <h1 className="flex items-center text-2xl font-medium">Overview</h1>
      <form className="flex items-center">
        <Button type="button">
          <Icon
            className="h-[14px] w-[14px]"
            src={search}
            alt="Search"
            width="14"
            height="14"
          />
        </Button>
        <input className="h-[45px]" type="search" id="mySearch" name="q" />
      </form>
      <Button type="button">
        <Icon
          className="h-[19px] w-[19px]"
          src={notification}
          alt="Notification"
          width="19"
          height="19"
        />
      </Button>
      <Button type="button">
        <Icon
          className="h-[19px] w-[19px]"
          src={shoppingCart}
          alt="Shopping Cart"
          width="19"
          height="19"
        />
      </Button>
      <Button bgColor="orange-500" textColor="white" size="sm" type="button">
        <Icon
          className="h-[14px] w-[14px]"
          src={plus}
          alt="Plus"
          width="14"
          height="14"
        />
        Add Product
      </Button>
    </header>
  );
}

export default Header;
