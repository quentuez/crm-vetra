import React from "react";

// Assets
import close from "../../assets/Icon/close.png"; // https://www.flaticon.com/free-icon/close_2976286
import inbox from "../../assets/Icon/inbox.png"; // https://www.flaticon.com/free-icon/mail-inbox-app_3781605
import logout from "../../assets/Icon/logout.png"; // https://www.flaticon.com/free-icon/logout_3889524
import profile from "../../assets/Icon/profile.png"; // https://www.flaticon.com/free-icon/user_1144760
import settings from "../../assets/Icon/settings.png"; // https://www.flaticon.com/free-icon/settings_2099058

// Components
import Icon from "../Icon/Icon";

export default function NavigationModalContent({ onClose }) {
  return (
    <>
      <div className="absolute top-[149px] left-[96px] w-[208px] rounded-lg bg-white py-2 shadow-xl">
        <button onClick={onClose} className="absolute right-[-20px]">
          <Icon alt="Close Icon" src={close} />
        </button>
        <ul>
          <li>
            <a className="flex items-center px-6 py-2">
              <Icon alt="Profile Icon" className="mr-3" src={profile} />
              Profile
            </a>
          </li>
          <li>
            <a className="flex items-center px-6  py-2">
              <Icon alt="Inbox Icon" className="mr-3" src={inbox} />
              Inbox
            </a>
          </li>
          <li>
            <a className="flex items-center px-6  py-2">
              <Icon alt="Settings Icon" className="mr-3" src={settings} />
              Settings
            </a>
          </li>
          <li>
            <a className="flex items-center px-6  py-2">
              <Icon alt="Logout Icon" className="mr-3" src={logout} />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
