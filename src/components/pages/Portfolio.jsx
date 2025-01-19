import React from "react";
import Card from "../Card";

export default function Portfolio() {
  const projects = [
    {
      title: "MVC Tech Blog",
      image: "https://placehold.co/600x400",
      github: "https://github.com/Kwansom/MVC-Tech-Blog",
      deployed: "https://mvc-tech-blog-1dzl.onrender.com/",
    },
    {
      title: "Music Discovery App",
      image: "https://placehold.co/600x400",
      github: "https://github.com/Kwansom/music-discovery-app",
      deployed: "https://rennancruz.github.io/music-discovery-app/",
    },
    {
      title: "Project 3",
      image: "https://placehold.co/600x400",
      github: "http://google.com",
      deployed: "http://google.com",
    },
    {
      title: "Project 4",
      image: "https://placehold.co/600x400",
      github: "http://google.com",
      deployed: "http://google.com",
    },
    {
      title: "Project 5",
      image: "https://placehold.co/600x400",
      github: "http://google.com",
      deployed: "http://google.com",
    },
    {
      title: "Project 6",
      image: "https://placehold.co/600x400",
      github: "http://google.com",
      deployed: "http://google.com",
    },
  ];

  return (
    <section className="portfolio-section">
      {/* <h1>Work</h1> */}

      <div className="card-container">
        {projects.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </section>
  );
}
