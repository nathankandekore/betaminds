import React from "react";
import "../App.css";
import FeatureBanner from "../components/FeatureBanner";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Partners from "../components/Partners.js";
import Footer from "../components/Footer.js";
import SignatureBanner from "../components/SignatureBanner.js";
import HeaderTop from "../components/HeaderTop";
import Slogan from "../components/Slogan";
import ContactForm from "../components/ContactForm";

import Hamburger from "hamburger-react";

const Home = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />

        {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
      </header>
      <Slogan />
      <FeatureBanner />

      <div>
        <Slideshow />
      </div>
      <div>
        <ContactForm />
      </div>

      <Partners />
      <Footer />
      <SignatureBanner />
    </>
  );
};

export default Home;
