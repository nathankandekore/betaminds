import React from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer.js";
import Rhyania from "../Images/IMG_20191102_102339_967.jpg";

const AboutUs = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
      </header>

      <h1 className="sloganText">About Our Organisation</h1>

      <div className="about-us-background">
        <h1 className="about-us-subheading-text">
          Betaminds is a holistic intergenerational youth engagement provision
          founded by a qualified behaviour specialist & a team of qualified
          professionals
        </h1>

        <div className="about-us-background-overlay"></div>
      </div>
      <Slideshow />

      <h1 className="sloganText">
        We exist to remove obstacles faced by many of our inner-city youth and
        the support networks around them by providing a tailored, bespoke,
        encompassing service to cut through the boundaries that they face.{" "}
      </h1>
      <div className="meet-the-founder-container">
        <div className="meet-the-founder">
          <div className="meet-the-founder-text">
            <h1>Meet the Founder </h1>
            <h2>
              “I have been an educator for over 10 years and during that time I
              have amassed a lifetime of experience in various teaching
              establishments including mainstream and supplementary schools,
              Pupil Referral Units, Alternative Provisions, Colleges and
              Prisons”. “I am most passionate about supporting the most
              challenging to engage students at risk of expulsion, community
              orders or police contact”.
            </h2>

            <h2>Rhyania Blackett-Codrington </h2>
            <br />
            <h2>Managing Director & Betaminds Lead</h2>
          </div>
        </div>
        <div>
          <img
            src={Rhyania}
            className="meet-the-founder-image"
            alt="image-of-Rhyania"
          />
        </div>
      </div>

      <Slideshow />
      <Footer />
    </>
  );
};

export default AboutUs;
