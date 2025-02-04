import { Project } from "./Project";

interface ProjectType {
  link: string;
  background: string;
  title: string;
  logo: string;
  projectType: string;
}

interface ProjectsListProps {
  projects: ProjectType[];
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="wrapper">
      <div className="projects-container">
        {projects.map(
          ({ link, background, title, logo, projectType }, index) => (
            <Project
              key={index}
              link={link}
              background={background}
              title={title}
              logo={logo}
              projectType={projectType}
            />
          )
        )}
      </div>
    </div>
  );
};
