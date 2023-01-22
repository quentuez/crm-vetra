import React, { useState } from "react";

// Assets
import authentication from "../../assets/Icon/authentication.png"; // https://www.flaticon.com/free-icon/insurance_4448933
import buyer from "../../assets/Icon/buyer.png"; // https://www.flaticon.com/free-icon/deal_2199967
import chats from "../../assets/Icon/chats.png"; // https://www.flaticon.com/free-icon/chat_589708
import components from "../../assets/Icon/components.png"; // https://www.flaticon.com/free-icon/components_4862452
import customers from "../../assets/Icon/customers.png"; // https://www.flaticon.com/free-icon/customer-service_950299
import dashboard from "../../assets/Icon/dashboard.png"; // https://www.flaticon.com/free-icon/dashboard_1828765
import email from "../../assets/Icon/email.png"; // https://www.flaticon.com/free-icon/mail_646094
import errorPages from "../../assets/Icon/errorPages.png"; // https://www.flaticon.com/free-icon/no-results_6179016
import faq from "../../assets/Icon/faq.png"; // https://www.flaticon.com/free-icon/faq_2618540
import forms from "../../assets/Icon/forms.png"; // https://www.flaticon.com/free-icon/contact-form_1698477
import invoices from "../../assets/Icon/invoices.png"; // https://www.flaticon.com/free-icon/invoice_522575
import orders from "../../assets/Icon/orders.png"; // https://www.flaticon.com/free-icon/clipboard_839860
import pricingTable from "../../assets/Icon/pricingTable.png"; // https://www.flaticon.com/free-icon/pricing_3815521
import products from "../../assets/Icon/products.png"; // https://www.flaticon.com/free-icon/product_2652218
import profile from "../../assets/Icon/profile.png"; // https://www.flaticon.com/free-icon/user_1144760
import searchPage from "../../assets/Icon/searchPage.png"; // https://www.flaticon.com/free-icon/search_1674580
import settings from "../../assets/Icon/settings.png"; // https://www.flaticon.com/free-icon/setting_2040504
import todoApp from "../../assets/Icon/todoApp.png"; // https://www.flaticon.com/free-icon/smartphone_3942588
import users from "../../assets/Icon/users.png"; // https://www.flaticon.com/free-icon/group_694642
import content from "../../assets/Icon/content.png"; // https://www.flaticon.com/free-icon/content_2503667
import charts from "../../assets/Icon/charts.png"; // https://www.flaticon.com/free-icon/bar-chart_478544
import extensions from "../../assets/Icon/extensions.png"; // https://www.flaticon.com/free-icon/extension_3793602
import menuItem from "../../assets/Icon/menuItem.png"; // https://www.flaticon.com/free-icon/menu_3018944
import disabled from "../../assets/Icon/disabled.png"; // https://www.flaticon.com/free-icon/disabled_2089699

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
    { id: 3, title: "Content", src: content },
    { id: 4, title: "Charts", src: charts },
    { id: 5, title: "Extensions", src: extensions },
  ];
  const Other = [
    { id: 1, title: "Menu Item", src: menuItem },
    { id: 2, title: "Disabled", src: disabled },
  ];

  const ECommerceListItem = ECommerce.map((item) => (
    <li key={item.id} className="flex px-[20px] py-[10px]">
      <Icon src={item.src} className="mr-[12px]" />
      <a
        href="#"
        className={active === true ? "rounded-3xl bg-orange-500 " : ""}
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const AppsListItem = Apps.map((item) => (
    <li key={item.id} className="flex px-[20px] py-[10px]">
      <Icon src={item.src} className="mr-[12px]" />
      <a
        href="#"
        className={active === true ? "rounded-3xl bg-orange-500 " : ""}
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const PagesListItem = Pages.map((item) => (
    <li key={item.id} className="flex px-[20px] py-[10px]">
      <Icon src={item.src} className="mr-[12px]" />
      <a
        href="#"
        className={active === true ? "rounded-3xl bg-orange-500 " : ""}
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const UserInterfaceListItem = UserInterface.map((item) => (
    <li key={item.id} className="flex px-[20px] py-[10px]">
      <Icon src={item.src} className="mr-[12px]" />
      <a
        href="#"
        className={active === true ? "rounded-3xl bg-orange-500 " : ""}
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));
  const OtherListItem = Other.map((item) => (
    <li key={item.id} className="flex px-[20px] py-[10px]">
      <Icon src={item.src} className="mr-[12px]" />
      <a
        href="#"
        className={active === true ? "rounded-3xl bg-orange-500 " : ""}
        onClick={() => setActive(!active)}
      >
        {item.title}
      </a>
    </li>
  ));

  return (
    <div className="m-[15px]">
      <h2 className="ml-[16px] px-[20px] pb-[20px] font-normal text-slate-400">
        E-Commerce
      </h2>
      <ul className="px-[20px] py-[10px]">{ECommerceListItem}</ul>
      <h2 className="ml-[16px] px-[20px] pb-[20px] font-normal text-slate-400">
        Apps
      </h2>
      <ul className="px-[20px] py-[10px]">{AppsListItem}</ul>
      <h2 className="ml-[16px]  px-[20px] pb-[20px] font-normal text-slate-400">
        Pages
      </h2>
      <ul className="px-[20px] py-[10px]">{PagesListItem}</ul>
      <h2 className="ml-[16px] px-[20px] pb-[20px] font-normal text-slate-400">
        User Interface
      </h2>
      <ul className="px-[20px] py-[10px]">{UserInterfaceListItem}</ul>
      <h2 className="ml-[16px] px-[20px] pb-[20px] font-normal text-slate-400">
        Other
      </h2>
      <ul className="px-[20px] py-[10px]">{OtherListItem}</ul>
    </div>
  );
}
