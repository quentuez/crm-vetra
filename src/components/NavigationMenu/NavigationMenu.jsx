import React, { useState } from "react";

// Assets
import authentication from "../Icon/authentication.png"; // https://www.flaticon.com/free-icon/insurance_4448933
import buyer from "../Icon/buyer.png"; // https://www.flaticon.com/free-icon/deal_2199967
import chats from "../Icon/chats.png"; // https://www.flaticon.com/free-icon/chat_589708
import components from "../Icon/components.png"; // https://www.flaticon.com/free-icon/components_4862452
import customers from "../Icon/customers.png"; // https://www.flaticon.com/free-icon/customer-service_950299
import dashboard from "../Icon/dashboard.png"; // https://www.flaticon.com/free-icon/dashboard_1828765
import email from "../Icon/email.png"; // https://www.flaticon.com/free-icon/mail_646094
import errorPages from "../Icon/errorPages.png"; // https://www.flaticon.com/free-icon/no-results_6179016
import faq from "../Icon/faq.png"; // https://www.flaticon.com/free-icon/faq_2618540
import forms from "../Icon/forms.png"; // https://www.flaticon.com/free-icon/contact-form_1698477
import invoices from "../Icon/invoices.png"; // https://www.flaticon.com/free-icon/invoice_522575
import orders from "../Icon/orders.png"; // https://www.flaticon.com/free-icon/clipboard_839860
import pricingTable from "../Icon/pricingTable.png"; // https://www.flaticon.com/free-icon/pricing_3815521
import products from "../Icon/products.png"; // https://www.flaticon.com/free-icon/product_2652218
import profile from "../Icon/profile.png"; // https://www.flaticon.com/free-icon/user_1144760
import searchPage from "../Icon/searchPage.png"; // https://www.flaticon.com/free-icon/search_1674580
import settings from "../Icon/settings.png"; // https://www.flaticon.com/free-icon/setting_2040504
import todoApp from "../Icon/todoApp.png"; // https://www.flaticon.com/free-icon/smartphone_3942588
import users from "../Icon/users.png"; // https://www.flaticon.com/free-icon/group_694642

// Components
import Icon from "../Icon/Icon";

export default function NavigationMenu() {
  const [active, setActive] = useState(false);

  const ECommerce = [
    { id: 1, title: "Dashboard", src: dashboard },
    { id: 2, title: "Orders", src: orders },
    { id: 3, title: "Products", src: products },
    { id: 4, title: "Buyer", src: buyer },
    { id: 5, title: "Customers", src: customers },
    { id: 6, title: "Invoices", src: invoices },
  ];

  const Apps = [
    { id: 1, title: "Chats", src: chats },
    { id: 2, title: "Email", src: email },
    { id: 3, title: "Todo App", src: todoApp },
  ];
  const Pages = [
    { id: 1, title: "Profile", src: profile },
    { id: 2, title: "Users", src: users },
    { id: 3, title: "Authentication", src: authentication },
    { id: 4, title: "Error Pages", src: errorPages },
    { id: 5, title: "Settings", src: settings },
    { id: 6, title: "Pricing Table", src: pricingTable },
    { id: 7, title: "Search Page", src: searchPage },
    { id: 8, title: "FAQ", src: faq },
  ];
  const UserInterface = [
    { id: 1, title: "Components", src: components },
    { id: 2, title: "Forms", src: forms },
    { id: 3, title: "Content" },
    { id: 4, title: "Charts" },
    { id: 5, title: "Extensions" },
  ];
  const Other = [
    { id: 1, title: "Menu Item" },
    { id: 2, title: "Disabled" },
  ];

  const ECommerceListItem = ECommerce.map((item) => (
    <li key={item.id} className="flex">
      <Icon src={item.src} size="22" />
      <a
        href="#"
        className={
          active === true ? "rounded-3xl bg-orange-500 px-[20px] py-[10px]" : ""
        }
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const AppsListItem = Apps.map((item) => (
    <li key={item.id} className="flex">
      <Icon src={item.src} size="22" />
      <a
        href="#"
        className={
          active === true ? "rounded-3xl bg-orange-500 px-[20px] py-[10px]" : ""
        }
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const PagesListItem = Pages.map((item) => (
    <li key={item.id} className="flex">
      <Icon src={item.src} size="22" />
      <a
        href="#"
        className={
          active === true ? "rounded-3xl bg-orange-500 px-[20px] py-[10px]" : ""
        }
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const UserInterfaceListItem = UserInterface.map((item) => (
    <li key={item.id} className="flex">
      {" "}
      <Icon src={item.src} size="22" />
      <a
        href="#"
        className={
          active === true ? "rounded-3xl bg-orange-500 px-[20px] py-[10px]" : ""
        }
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const OtherListItem = Other.map((item) => (
    <li key={item.id} className="flex">
      <Icon src={item.src} size="22" />
      <a
        href="#"
        className={
          active === true ? "rounded-3xl bg-orange-500 px-[20px] py-[10px]" : ""
        }
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));

  return (
    <div className="m-[15px]">
      <small className="ml-[16px] font-normal text-slate-400">E-Commerce</small>
      <ul>{ECommerceListItem}</ul>
      <small className="ml-[16px] font-normal text-slate-400">Apps</small>
      <ul>{AppsListItem}</ul>
      <small className="ml-[16px] font-normal text-slate-400">Pages</small>
      <ul>{PagesListItem}</ul>
      <small className="ml-[16px] font-normal text-slate-400">
        User Interface
      </small>
      <ul>{UserInterfaceListItem}</ul>
      <small className="ml-[16px] font-normal text-slate-400">Other</small>
      <ul>{OtherListItem}</ul>
    </div>
  );
}
