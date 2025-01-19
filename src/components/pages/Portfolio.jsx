import React, { useEffect } from "react";
import Card from "../Card";
import "../../assets/css/Portfolio.css";
import mvcImage from "../../assets/images/MVC-tech-blog.jpg";
import musicImage from "../../assets/images/Music-discovery-app.jpg";
import blogImage from "../../assets/images/My-First-Blog.jpg";
import onTask from "../../assets/images/On-task.jpg";
import weather from "../../assets/images/Weather-forecaster.jpg";
import Jate from "../../assets/images/JATE.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "MVC Tech Blog",
      image: mvcImage,
      github: "https://github.com/Kwansom/MVC-Tech-Blog",
      deployed: "https://mvc-tech-blog-1dzl.onrender.com/",
    },
    {
      title: "Music Discovery App",
      image: musicImage,
      github: "https://github.com/Kwansom/music-discovery-app",
      deployed: "https://rennancruz.github.io/music-discovery-app/",
    },
    {
      title: "My Life Blog",
      image: blogImage,
      github: "https://github.com/Kwansom/my-life-blog",
      deployed: "https://kwansom.github.io/my-life-blog/",
    },
    {
      title: "On Task",
      image: onTask,
      github: "https://github.com/Kwansom/on-task",
      deployed: " https://on-task.onrender.com/login",
    },
    {
      title: "Weather Forecaster",
      image: weather,
      github: "https://github.com/Kwansom/weather-forecaster",
      deployed: "https://kwansom.github.io/weather-forecaster/",
    },
    {
      title: "Just Another Text Editor",
      image: Jate,
      github: "https://github.com/Kwansom/PWA-Text-Editor",
      deployed: "https://pwa-text-editor-866t.onrender.com/",
    },
  ];

  return (
    <section className="portfolio-section">
      {/* <h1>Work</h1> */}

      <div className="card-container">
        {projects.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
