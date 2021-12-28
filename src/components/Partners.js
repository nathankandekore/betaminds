import React from "react";
import Bloodstoppers from "../Images/Bleedstoppers.png";
import Paperpages from "../Images/Paper_pages.jpg";
import Boilerhouse from "../Images/logooriginalcolours.png";
import KandekoreLogo from "../Images/kandekorelogogrey.png";

const Partners = () => {
  return (
    <div className="partners">
      <h4>with the support of our partners</h4>
      <div className="partnerContainer">
        <div className="logo-div">
          <img src={Bloodstoppers} alt="bleedstoppers" />
        </div>
        <div className="logo-div">
          <img src={Paperpages} alt="paperpages" />
        </div>
        <div className="logo-div">
          <img src={Boilerhouse} alt="boilerhouse" />
        </div>
        <div className="logo-div">
          <img src={KandekoreLogo} alt="kelogo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
