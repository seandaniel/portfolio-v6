import { Project } from "./Project";
import projectList from "./projectList";

export const ProjectsList = () => {
  return (
    <div className="wrapper">
      <ul className="projects-container">
        {projectList.map(
          ({ icon, link, title, description, className }, index) => (
            <Project
              key={index}
              icon={icon}
              link={link}
              title={title}
              description={description}
              className={className}
            />
          )
        )}
      </ul>
    </div>
  );
};
