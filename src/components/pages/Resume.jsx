import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import resume from "../../assets/resume/Resume2023.pdf";
import "../../assets/css/Resume.css";

export default function Resume() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "50px 0",
        fontFamily: "'Helvetica Neue', sans-serif",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <div className="resume-container">
        <a
          href={resume}
          download="Kun Wansom's Resume"
          target="_blank"
          rel="noreferrer"
          style={{ marginBottom: "50px" }}
        >
          <Button
            id="resume-button"
            className="pop-on-hover"
            variant="contained"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              textTransform: "none",
              padding: "12px 40px",
              borderRadius: "30px",
              backgroundColor: "lemonchiffon",
              color: "#222",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "gold",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            Download My Resume Here
          </Button>
        </a>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#222",
            marginBottom: "20px",
            textDecoration: "underline",
          }}
        >
          Front-end Skills
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "30px",
            backgroundColor: "lemonchiffon",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          HTML
          <br />
          CSS
          <br />
          JavaScript
          <br />
          React
          <br />
          Bootstrap
        </p>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#222",
            margin: "15px 0 20px 0",
            textDecoration: "underline",
          }}
        >
          Back-end Skills
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "30px",
            backgroundColor: "lemonchiffon",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          HTML
          <br />
          APIs
          <br />
          Node
          <br />
          Express
          <br />
          PostgreSQL, Sequelize
          <br />
          MongoDB, Mongoose
          <br />
          Bootstrap
          <br />
          REST
          <br />
          GraphQL
        </p>
      </div>
    </Box>
  );
}
