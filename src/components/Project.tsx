interface ProjectProps {
  background: string;
  logo: string;
  link: string;
  title: string;
}

export const Project = ({ background, logo, link, title }: ProjectProps) => {
  return (
    <section className="project-container">
      <a href={link} style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} alt={title} />
      </a>
      <h4>{title}</h4>
    </section>
  );
};
