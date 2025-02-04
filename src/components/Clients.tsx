import { ProjectsList } from "./ProjectsList";

const clientProjects = [
  {
    link: "https://www.verbeekslandscaping.com",
    background: "",
    title: "Verbeek's Landscaping",
    logo: "",
    projectType: "website-project",
  },
];

export const Clients = () => <ProjectsList projects={clientProjects} />;
