export default function Project({ title, link, github, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <a href={link}>Deployment</a> <br />
      <a href={github}>GitHub</a> <br />
      <img src={image} />
    </div>
  );
}
