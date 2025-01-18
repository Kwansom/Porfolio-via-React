import React from "react";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          sx={{ color: "text.primary" }}
        >
          <Grid
            style={{ display: "flex", justifyContent: "space-evenly" }}
            item
            xs={4}
          >
            <LinkedInIcon
              id="icon"
              className="pop-on-hover"
              sx={{
                fontSize: 50,
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: "gold",
                },
              }}
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/kun-w-371647178/")
              }
            />
            <GitHubIcon
              id="icon"
              className="pop-on-hover"
              sx={{
                fontSize: 50,
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: "gold",
                },
              }}
              onClick={(event) =>
                (window.location.href = "https://github.com/kwansom")
              }
            />
            <EmailIcon
              id="icon"
              className="pop-on-hover"
              sx={{
                fontSize: 50,
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: "gold",
                },
              }}
              onClick={(event) =>
                (window.location.href = "mailto:wansom.kun@gmail.com")
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
