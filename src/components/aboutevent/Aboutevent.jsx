import "./aboutevent.css";
// import googleMapImage from "../../../public/assets/fonts/map.png";

import { useEffect } from "react";
const Aboutevent = () => {
  return (
    <div className="wrap-about-us" id="about">
      <div className="eventHead">
        <p className="eventHeading">About</p>
      </div>
      <div className="aboutContainer">
        <div className="about1">
          <div className="about11">
            <span className="aboutHeading">Zion</span>
            <span className="aboutContent">
              Zion is an annual technical festival organized by Dr. D.Y. Patil
              Institute of Technology, Pimpri, Pune, that aims to provide a
              platform for students to showcase their technical skills and
              creativity.
            </span>
          </div>
          <div className="about11">
            <span className="aboutHeading">Zion</span>
            <span className="aboutContent">
              Zion is an annual technical festival organized by Dr. D.Y. Patil
              Institute of Technology, Pimpri, Pune, that aims to provide a
              platform for students to showcase their technical skills and
              creativity.
            </span>
          </div>
        </div>
        <div className="aboutImg">
          <img
            className="aboutUsImage"
            src={"./assets/zionabout2.png"}
            alt="Google Map showing event location"
          />
        </div>
        <div className="about1">
          <div className="about11">
            <span className="aboutHeading">Zion</span>
            <span className="aboutContent">
              Zion is an annual technical festival organized by Dr. D.Y. Patil
              Institute of Technology, Pimpri, Pune, that aims to provide a
              platform for students to showcase their technical skills and
              creativity.
            </span>
          </div>
          <div className="about11">
            <span className="aboutHeading">Zion</span>
            <span className="aboutContent">
              Zion is an annual technical festival organized by Dr. D.Y. Patil
              Institute of Technology, Pimpri, Pune, that aims to provide a
              platform for students to showcase their technical skills and
              creativity.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;