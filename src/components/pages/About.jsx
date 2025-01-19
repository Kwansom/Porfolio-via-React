import React from "react";
import portrait from "../../assets/images/portrait.JPG";
import "../../assets/css/About.css";

export default function About() {
  return (
    <div className="about-container">
      <img src={portrait} alt="me" style={{ width: "200px", height: "auto" }} />
      <p>
        {/* <h1>About Me:</h1> */}
        Hello, my name is Kun. I am an aspiring web developer. Having worked in
        the fine art industry for close to 10 years- I want to take my analog
        problem solving skills into the digital landscape. You can find my work
        experience and coding portfolio here!
      </p>
    </div>
  );
}
