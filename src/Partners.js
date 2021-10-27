import React from "react";
import Bloodstoppers from "/Users/nathankandekore-white/Desktop/betaminds/src/Bleedstoppers.png";
import Paperpages from "/Users/nathankandekore-white/Desktop/betaminds/src/Paper_pages.jpg";
import Boilerhouse from "/Users/nathankandekore-white/Desktop/betaminds/src/BH Logo cropped.png";
import Kelogo from "/Users/nathankandekore-white/Desktop/betaminds/src/KE logo mk2 white background (1).svg";

const Partners = () => {
  return (
    <div className="partners">
      <h4>with the support of our partners</h4>
      <div className="partnerContainer">
        <div>
          <img
            src={Bloodstoppers}
            height={150}
            width={250}
            alt="bleedstoppers"
          />
        </div>
        <div>
          <img src={Paperpages} height={150} width={200} alt="paperpages" />
        </div>
        <div>
          <img src={Boilerhouse} height={150} width={250} alt="boilerhouse" />
        </div>
        <div>
          <img src={Kelogo} height={150} width={250} alt="kelogo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
