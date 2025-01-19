import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Card({ project }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={project.image}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <div className="card-text">
        <h1 className="card-title">{project.title}</h1>
        <GitHubIcon
          id="icon"
          className="pop-on-hover"
          sx={{
            fontSize: 40,
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.1)",
              color: "gold",
            },
          }}
          onClick={(event) => (window.location.href = project.github)}
        />
        <p className="card-deployed">
          <a href={project.deployed} style={{ textDecoration: "none" }}>
            Link To Deployed
          </a>
        </p>
      </div>
    </div>
  );
}
