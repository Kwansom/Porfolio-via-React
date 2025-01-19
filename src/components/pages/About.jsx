import React from "react";
import Box from "@mui/material/Box";
import portrait from "../../assets/images/portrait.JPG";
import "../../assets/css/About.css";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "50px 0px",
        fontFamily: "'Helvetica Neue', sans-serif",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <div className="about-container">
        <img
          src={portrait}
          alt="me"
          style={{ width: "200px", height: "auto" }}
        />
        <p>
          {/* <h1>About Me:</h1> */}
          Hello, my name is Kun. I am an aspiring web developer. Having worked
          in the fine art industry for close to 10 years- I want to take my
          analog problem solving skills into the digital landscape. You can find
          my work experience and coding portfolio here!
        </p>
      </div>
    </Box>
  );
}
