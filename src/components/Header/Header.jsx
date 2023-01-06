import React from "react";

// Assets
import notification from "../Icon/notification.png"; // https://www.flaticon.com/free-icon/notification_2645897
import plus from "../Icon/plus.png"; // https://www.flaticon.com/ru/free-icon/plus_3303893
import search from "../Icon/search.png"; // https://www.flaticon.com/free-icon/search_711319
import shoppingCart from "../Icon/shoppingCart.png"; // https://www.flaticon.com/free-icon/shopping-cart_1170678

// Components
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import NotificationBadge from "../NotificationBadge/NotificationBadge";

// Styles
import "../../index.css";

export default function Header() {
  return (
    <header className="flex h-[90px] items-center px-[20px]">
      <h1 className="mr-[70px] w-[116px] text-2xl font-medium">Overview</h1>

      <form className="mr-[50px] flex w-full">
        <Button
          className="mr-[3px] rounded-l-lg bg-white px-[20px] py-[10.8px]"
          type="submit"
        >
          <Icon alt="Search" src={search} />
        </Button>
        <input
          className="w-full rounded-r-lg bg-white px-[20px] py-[10.8px]"
          placeholder="Search..."
          type="search"
        />
      </form>

      <Button className="relative px-[20px]">
        <NotificationBadge />
        <Icon alt="Notification" src={notification} />
      </Button>

      <Button className="relative px-[20px]">
        <NotificationBadge />
        <Icon alt="Shopping Cart" src={shoppingCart} />
      </Button>

      <form>
        <Button className="flex h-[45px] w-[155px] items-center rounded-lg bg-orange-500 px-[20px] py-[10.8px] text-white hover:bg-orange-600">
          <Icon alt="Plus" className="mr-[9px]" size="14" src={plus} />
          Add Product
        </Button>
      </form>
    </header>
  );
}
