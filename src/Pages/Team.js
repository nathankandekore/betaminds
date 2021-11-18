import React from "react";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import WhiteLady from "../Images/white-lady-brown-hair.jpg";
import GingerLady from "../Images/u3WmDyKGsrY.jpg";
import LeightonBaines from "../Images/rriAI0nhcbc.jpg";
import BlackHairBrownDude from "../Images/PQeoQdkU9jQ.jpg";
import ChineseDude from "../Images/n4KewLKFOZw.jpg";
import SmilingRedLips from "../Images/mEZ3PoFGs_k.jpg";
import BlackBeauty from "../Images/J1OScm_uHUQ.jpg";
import MiddleAgedMan from "../Images/cdksyTqEXzo.jpg";
import Aphrodite from "../Images/bqe0J0b26RQ.jpg";
import PlasticWoman from "../Images/3TLl_97HNJo.jpg";
import SignatureBanner from "../components/SignatureBanner";
import Footer from "../Footer";

const Team = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
      </header>
      <body>
        <div className="hero-section">
          <div className="row">
            <div className="container">
              <img src={GingerLady} alt="GingerLady" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={LeightonBaines} alt="LeightonBaines" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={BlackHairBrownDude} alt="BlackHairBrownDude" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={ChineseDude} alt="ChineseDude" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={SmilingRedLips} alt="SmilingRedLips" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <img src={BlackBeauty} alt="BlackBeauty" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={MiddleAgedMan} alt="MiddleAgedMan" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={Aphrodite} alt="Aphrodite" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={PlasticWoman} alt="PlasticWoman" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
            <div className="container">
              <img src={WhiteLady} alt="image10" />
              <div className="middle">
                <div className="text">Sample Text</div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
};

export default Team;
