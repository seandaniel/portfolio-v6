import { ProjectsList } from "./ProjectsList";
import fuelImg from "../assets/rocket.svg";
const mediaProjects = [
  {
    link: "https://open.spotify.com/playlist/4uH2mfivSNIZeHXrndnzjx?si=6a9fec26347d48c5",
    background: fuelImg,
    title: "Fuel",
    logo: "",
    projectType: "media-project",
  },
  {
    link: "https://open.spotify.com/playlist/5YgbIoNbuNGPTyThjHZPSY?si=a5e67d74db504ab7",
    background:
      "https://verbeekslandscaping.com/cdn/shop/t/7/assets/logo-alternate.png?v=115001825847813192911607123270",
    title: "Zen",
    logo: "",
    projectType: "media-project",
  },
];

export const Media = () => <ProjectsList projects={mediaProjects} />;
