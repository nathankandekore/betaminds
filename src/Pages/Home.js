import React from "react";
import "../App.css";
import FeatureBanner from "../components/FeatureBanner";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Partners from "../Partners";
import Footer from "../Footer";
import SignatureBanner from "../SignatureBanner";
import HeaderTop from "../components/HeaderTop";
import Slogan from "../components/Slogan";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
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
