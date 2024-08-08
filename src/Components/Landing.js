import React, { useState, useEffect } from "react";
import "../Css/Landing.css";
import { LANDING_TITLE, LANDING_BLURB, LANDING_BTNS } from "./Content";
import Landing_1 from "../Images/landing_1.png";
import Landing_2 from "../Images/landing_2.png";
import Landing_3 from "../Images/landing_3.png";

function Landing() {
  const [ImageIdx, SetImageIdx] = useState(0);

  const images = [Landing_1, Landing_2, Landing_3];

  const ChangeImg = () => {
    if (ImageIdx === images.length - 1) {
      SetImageIdx(0);
    } else {
      SetImageIdx(ImageIdx + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(ChangeImg, 5000);
    return () => clearInterval(intervalId);
  }, [ImageIdx]);

  return (
    <div className="landing-wrapper">
      <div className="landing-centered">
        <div className="landing-left">
          <div className="landing-title">{LANDING_TITLE}</div>
          <div className="landing-blurb">{LANDING_BLURB}</div>
          <div className="landing-btns">
            <div className="landing-btns-centered">
              {LANDING_BTNS.map((texto, idx) => {
                return (
                  <div className="landing-btn" key={idx}>
                    {texto}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="landing-right">
          <div className="landing-img-wrapper">
            <img src={images[ImageIdx]} className="landing-img"></img>
          </div>
          <div onClick={ChangeImg} className="change-photo">
            Change Photo
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
