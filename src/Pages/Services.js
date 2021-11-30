import React from "react";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import BeingOneLogo from "../Images/beingone_logo.png";
import WellBeingLogo from "../Images/wellbeing_logo.png";
// import FamilyPic from "../familyPic.jpeg";
import ThinkWellLogo from "../Images/BetaMinds_logothinkwell.jpg";
import Footer from "../Footer";

const Services = () => {
  return (
    <>
      <header>
        <HeaderTop />

        <Header />
      </header>

      <h2 className="sloganText">
        BetaMinds CIC services consists of three interwoven strands
      </h2>

      <h1 className="sloganText">Think Well, Well Being and Being One</h1>
      <div className="being-one-logo-position">
        <img
          src={ThinkWellLogo}
          alt="logo-thing-well"
          width={300}
          height={175}
        />
      </div>
      <div className="think-well-container">
        <div className="think-well-section">
          <div className="think-well-text">
            <div>
              <p>1:1 and small group tutoring & extra curricular sessions</p>
            </div>
            <div>
              <p>Employability and Careers Advice</p>
            </div>
            <div>
              <p>Tailored in-school workshops</p>
            </div>
            <div>
              <p>One-off sessions and programs</p>
            </div>
            <div>
              <p>Cross-Strand Citizenship Project</p>
            </div>
            <div>
              <p>‘My Torch is Lit’ Project </p>
            </div>
          </div>

          <div className="think-well-image-container"></div>
        </div>
      </div>
      <div className="photo-divider-section"></div>
      <div className="well-being-container">
        <div className="well-being-section">
          <img src={WellBeingLogo} width={300} height={175} />
          <div className="well-being-text">
            <div>
              <p>Cognitive Behavioural Therapy</p>
            </div>
            <div>
              <p>1:1 Support</p>
            </div>
            <div>
              <p>Psychosocial Groupwork Sessions</p>
            </div>
            <div>
              <p>Family Mediation</p>
            </div>
            <div>
              <p>Self-Love Sessions</p>
            </div>
            <div>
              <p>Mentoring</p>
            </div>
            <div>
              <p>SEN Coordinator and Family Liaison </p>
            </div>
          </div>
        </div>
        <div className="photo-divider-section"></div>
        <div className="being-one-container">
          <div className="being-one-section">
            <div className="being-one-logo-position">
              <img src={BeingOneLogo} width={300} height={175} />
            </div>

            <div className="being-one-text">
              <div>
                <p>Creative Writing Program</p>
              </div>
              <div>
                <p>Coffee Mornings </p>
              </div>
              <div>
                <p>SEN Sibling Program</p>
              </div>
              <div>
                <p>Experiences for youth and families</p>
              </div>
              <div>
                <p>Various Social & Community Events</p>
              </div>
              <div>
                <p>‘How To’ Masterclasses</p>
              </div>
              <div>
                <p>Sports and Fitness</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-divider-section">
        {/* <img src={FamilyPic} alt="divider spacer" /> */}
      </div>

      <Footer />
    </>
  );
};

export default Services;
