import React from "react";
import portrait from "../../assets/images/portrait.JPG";
import "../../assets/css/About.css";

export default function About() {
  return (
    <div className="about-container">
      <img src={portrait} alt="me" style={{ width: "150px", height: "auto" }} />
      <p>
        <h1>About Me:</h1>
        Hello, my name is Kun Wansom. I am an aspiring web develop! Having
        worked in the fine art industry for close to 10 years
      </p>
    </div>
  );
}
