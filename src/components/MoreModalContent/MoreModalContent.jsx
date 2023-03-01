import React from "react";

// Assets
import close from "../../assets/Icon/close.png"; // https://www.flaticon.com/free-icon/close_2976286

// Components
import Icon from "../Icon/Icon";

export default function MoreModalContent({ onClose }) {
  return (
    <>
      <div className="absolute top-[149px] left-[96px] w-[208px] rounded-lg bg-white py-2 shadow-xl">
        <button onClick={onClose} className="absolute right-[-20px]">
          <Icon alt="Close Icon" src={close} />
        </button>
        <ul>
          <li>
            <a className="flex items-center px-6 py-2">View Detail</a>
          </li>
          <li>
            <a className="flex items-center px-6  py-2">Download</a>
          </li>
        </ul>
      </div>
    </>
  );
}
