import React from "react";

import logo from "../mainlogo.png";

const HeaderTop = () => {
  return (
    <>
      <div>
        <img
          src={logo}
          height={81}
          width={183}
          alt="Logo"
          className="logoNav"
        />
        <button className="donateButton">Make a donation</button>
      </div>
    </>
  );
};

export default HeaderTop;
