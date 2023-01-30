import React from "react";

// Assets
import notification from "../../assets/Icon/notification.png"; // https://www.flaticon.com/free-icon/notification_2645897
import plus from "../../assets/Icon/plus.png"; // https://www.flaticon.com/ru/free-icon/plus_3303893
import search from "../../assets/Icon/search.png"; // https://www.flaticon.com/free-icon/search_711319
import shoppingCart from "../../assets/Icon/shoppingCart.png"; // https://www.flaticon.com/free-icon/shopping-cart_1170678

// Components
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import NotificationBadge from "../NotificationBadge/NotificationBadge";
import Title from "../Title/Title";

export default function Header() {
  return (
    <header className="flex h-[90px] items-center px-5">
      <Title className="mr-[70px] w-[116px] text-2xl font-medium">
        Overview
      </Title>
      <form className="mr-[50px] flex w-full">
        <Button className="mr-1 rounded-l-lg bg-white px-5 py-3" type="submit">
          <Icon alt="Search Icon" src={search} />
        </Button>
        <input
          className="w-full rounded-r-lg bg-white px-5 py-3"
          placeholder="Search..."
          type="search"
        />
      </form>

      <Button className="relative px-5">
        <NotificationBadge />
        <Icon alt="Notification Icon" src={notification} />
      </Button>

      <Button className="relative px-5">
        <NotificationBadge />
        <Icon alt="Shopping Cart Icon" src={shoppingCart} />
      </Button>

      <form>
        <Button className="flex h-[45px] w-[155px] items-center rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600">
          <Icon alt="Plus Icon" className="mr-2" size="14" src={plus} />
          Add Product
        </Button>
      </form>
    </header>
  );
}
