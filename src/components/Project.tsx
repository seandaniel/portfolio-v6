interface ProjectProps {
  logo: string;
  link: string;
  title: string;
  description: string;
}

export const Project = ({ logo, link, title, description }: ProjectProps) => {
  return (
    <div className="project-container">
      <a target="_blank" href={link}>
        <img className="logo-img" src={logo} alt={title} />
      </a>
      <h4>{title}</h4>
      <h5>{description}</h5>
    </div>
  );
};
