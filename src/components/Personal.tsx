import { ProjectsList } from "./ProjectsList.tsx";

const personalProjects = [
  {
    link: "https://www.goodthingsgolf.com",
    background: "",
    title: "Good Things Golf",
    logo: "",
    projectType: "website-project",
  },
  {
    link: "https://receiptify-v2.netlify.app/",
    background: "",
    title: "Receiptify",
    logo: "",
    projectType: "website-project",
  },
  {
    link: "https://webapp-notes.netlify.app/",
    background: "",
    title: "Notes",
    logo: "",
    projectType: "website-project",
  },
];

export const Personal = () => <ProjectsList projects={personalProjects} />;
