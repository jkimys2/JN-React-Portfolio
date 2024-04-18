// Import dependencies
import { Link } from "react-router-dom";

export default function Project({ title, link, github, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={link}>Deployed Page</Link>
      <Link to={github}>GitHub</Link>
      <a href={link}>Deployment</a> <br />
      <a href={github}>GitHub</a> <br />
      <img src={image} />
    </div>
  );
}
