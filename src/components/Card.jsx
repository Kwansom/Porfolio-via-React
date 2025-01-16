export default function Card({ project }) {
  return (
    <div className="card">
      <img className="card-image" src={project.image} />
      <div className="card-text">
        <h1 className="card-title">{project.title}</h1>
        <p className="card-github">
          <a href={project.github}>Link To Github</a>
        </p>
        <p className="card-deployed">
          <a href={project.deployed}>Link To Deployed</a>
        </p>
      </div>
    </div>
  );
}
