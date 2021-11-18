import React from "react";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";

const AboutUs = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
      </header>

      <div className="about-us-background">
        <h1>About Our Organisation</h1>
        <h2>
          Betaminds is a holistic intergenerational youth engagement provision
          founded by a qualified behaviour specialist & a team of qualified
          professionals
        </h2>
      </div>

      <div className=""></div>
    </>
  );
};

export default AboutUs;
