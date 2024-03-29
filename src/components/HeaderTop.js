import React from "react";

import logo from "../mainlogo.png";

const HeaderTop = () => {
  return (
    <>
      <div className="donate-and-logo" to="/">
        <img
          src={logo}
          height={81}
          width={183}
          alt="Logo"
          className="logoNav"
        />
        <button className="donateButton">
          <a
            className="btn-text"
            href="https://www.justgiving.com/"
            target="_blank"
          >
            Make a donation
          </a>
        </button>
      </div>
    </>
  );
};

export default HeaderTop;
