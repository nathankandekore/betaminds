import React, { useState } from "react";
import feedback from "./Data";
// import familyPic from "../familyPic.jpeg";

const Slideshow = () => {
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);
  // const { name, image, text } = feedback[index];

  const getReview = () => {
    let randomNumber = Math.floor(Math.random() * feedback.length);
    return randomNumber;
  };

  return (
    <article className="slideshow">
      <h1 className="slideshowText">
        {`${feedback[getReview()].text} ~
        ${feedback[getReview()].name}`}
      </h1>
    </article>
  );
};

export default Slideshow;
