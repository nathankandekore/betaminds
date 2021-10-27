import React from "react";
import WhiteLogo from "/Users/nathankandekore-white/Desktop/betaminds/src/betaminds-logo-white.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="companyInfoContainer" height={300} width={50}>
          <img src={WhiteLogo} alt="Betaminds logo" height={100} width={200} />
          <div>
            <h3 className="companyAddressText">123 Rainbow Drive</h3>
            <h3 className="companyAddressText">Colour World</h3>
            <h3 className="companyAddressText">A12 3BC</h3>
            <p className="companyAddressText">
              Registered Community Interest Company: 123455678
            </p>
          </div>
          <div className="socialMediaIconsContainer">
            <div className="facebookIcon">
              <a
                href="https://www.facebook.com/BetaMinds-101379921282336/"
                target="_blank"
              >
                <FaFacebookF size="2em" />
              </a>
            </div>
            <div className="instagramIcon">
              <a href="https://www.instagram.com/betaminds/" target="_blank">
                <BsInstagram size="2em" />
              </a>
            </div>
            <div className="twitterIcon">
              <a href="https://twitter.com/mindsbeta" target="_blank">
                <BsTwitter size="2em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
