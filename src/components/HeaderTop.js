import React from "react";

import logo from "/Users/nathankandekore-white/Desktop/betaminds/src/BetaMinds_mainlogowithtag.jpg";

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
