interface ProjectProps {
  icon: string;
  link: string;
  title: string;
  description: string;
  className: string;
}

export const Project = ({
  icon,
  link,
  title,
  description,
  className,
}: ProjectProps) => {
  return (
    <li className={`${className}`}>
      <a target="_blank" href={link}>
        <img className="icon-img" src={icon} alt={title} />
        <div className="title-description-container">
          <h4>{title}</h4>
          <h5>{description}</h5>
        </div>
      </a>
    </li>
  );
};
