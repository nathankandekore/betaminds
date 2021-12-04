import React from "react";
import TeamPic from "../classroomcoverfaes.jpg";
// import RhyStanding from "../Images/rhystanding.jpg";

const FeatureBanner = () => {
  return (
    <div>
      <div className="bannerStyle">
        <img src={TeamPic} className="imageSize" alt={"#"} />
      </div>
    </div>
  );
};

export default FeatureBanner;
