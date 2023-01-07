import React from "react";

export default function NavigationMenu() {
  const ECommerce = [
    "Dashboard",
    "Orders",
    "Products",
    "Buyer",
    "Customers",
    "Invoices",
  ];
  const Apps = ["Chats", "Email", "Todo App"];
  const Pages = [
    "Profile",
    "Users",
    "Authentication",
    "Error Pages",
    "Settings",
    "Pricing Table",
    "Search Page",
    "FAQ",
  ];
  const UserInterface = [
    "Components",
    "Forms",
    "Content",
    "Charts",
    "Extensions",
  ];
  const Other = ["Menu Item", "Disabled"];

  const ECommerceListItem = ECommerce.map((item) => <li>{item}</li>);
  const AppsListItem = Apps.map((item) => <li>{item}</li>);
  const PagesListItem = Pages.map((item) => <li>{item}</li>);
  const UserInterfaceListItem = UserInterface.map((item) => <li>{item}</li>);
  const OtherListItem = Other.map((item) => <li>{item}</li>);

  return (
    <div>
      <h2>E-Commerce</h2>
      <ul>{ECommerceListItem}</ul>
      <h2>Apps</h2>
      <ul>{AppsListItem}</ul>
      <h2>Pages</h2>
      <ul>{PagesListItem}</ul>
      <h2>User Interface</h2>
      <ul>{UserInterfaceListItem}</ul>
      <h2>Other</h2>
      <ul>{OtherListItem}</ul>
    </div>
  );
}
