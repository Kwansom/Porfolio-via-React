import Card from "../Card";

export default function Porfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "https://placehold.co/600x400",
      github: "http://google.com",
      deployed: "http://google.com",
    },
    {
      title: "Project 2",
      image: "https://placehold.co/200x100",
      github: "http://google.com",
      deployed: "http://google.com",
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
    <div>
      <h1>Work</h1>

      <div className="card-container">
        {projects.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
}
