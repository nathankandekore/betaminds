import React from "react";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import Kusu from "../Images/Kusu think well lead.jpeg";
import Rhyanina from "../Images/Rhyanina founder.jpeg";
import Ticha from "../Images/Ticha.jpeg";
import Nyesha from "../Images/Nyesha.jpeg";
import EmmaInniss from "../Images/Emma Inniss.jpeg";
import Nick from "../Images/Nick.jpeg";
import Anaisha from "../Images/Anaisha.jpeg";
import Selma from "../Images/Selma.jpeg";
import Jade from "../Images/jade.jpeg";
import Syaed from "../Images/Syaed.jpeg";
import Michelle from "../Images/michelle.jpeg";
import John from "../Images/John.jpeg";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer.js";

const Team = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
      </header>
      <Slideshow />
      <body>
        <div className="hero-section">
          <div className="row">
            <div className="container">
              <img src={Rhyanina} alt="Rhyanina photo" />
              <div className="middle">
                <div className="text">
                  Rhyanina Blackett-Codrington - Founder
                </div>
              </div>
            </div>
            <div className="container">
              <img src={Kusu} alt="Kusu photo" />
              <div className="middle">
                <div className="text">Kusu Biti - Think Well Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={Ticha} alt="Ticha photo" />
              <div className="middle">
                <div className="text">Ticha Mayo - Employability Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={Nyesha} alt="Nyesha photo" />
              <div className="middle">
                <div className="text">Nyesha Jones - Employability Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={EmmaInniss} alt="Emma Inniss photo" />
              <div className="middle">
                <div className="text">Emma Inniss - Think Well Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={Nick} alt="Nick photo" />
              <div className="middle">
                <div className="text">Nick Joseph - Being One Lead</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <img src={Anaisha} alt="Anaisha photo" />
              <div className="middle">
                <div className="text">Anaisha Allen - Well Being Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={Selma} alt="Selma photo" />
              <div className="middle">
                <div className="text">Selma Micael - Well Being Lead</div>
              </div>
            </div>
            <div className="container">
              <img src={Jade} alt="Jade photo" />
              <div className="middle">
                <div className="text">
                  Jade Lee - Well Being Lead and Family Outreach
                </div>
              </div>
            </div>
            <div className="container">
              <img src={Syaed} alt="Syaed photo" />
              <div className="middle">
                <div className="text">
                  Syaed Sentain - Operations & Sports Lead
                </div>
              </div>
            </div>
            <div className="container">
              <img src={Michelle} alt="Michelle photo" />
              <div className="middle">
                <div className="text">
                  Michelle Murray - Creativity & Performing Arts Lead
                </div>
              </div>
            </div>
            <div className="container">
              <img src={John} alt="John photo" />
              <div className="middle">
                <div className="text">
                  John Ade Antoh - SEN Coordinator & Family Outreach Lead
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Slideshow />

      <Footer />
    </>
  );
};

export default Team;
