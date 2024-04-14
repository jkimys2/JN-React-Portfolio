import Project from "./Project";

export default function Portfolio() {
  return (
    <div>
      <h1>JN Portfolio:</h1>
      <Project
        title={"First Project"}
        link={"https://www.google.com"}
        github={"https://github.com/jkimys2/JN-Portfolio/blob/main/index.html"}
        image={"./vite.svg"}
      />
      <Project title={"Second Project"} />
    </div>
  );
}
