import growthIcon from "../assets/growth.svg";
import musicSceneIcon from "../assets/music-scene.svg";
import golfIcon from "../assets/golf.svg";
import notesIcon from "../assets/notes.svg";
import keyboardIcon from "../assets/keyboard.svg"

const projectList = [
  {
    icon: musicSceneIcon,
    link: "https://receiptify-v2.netlify.app/",
    title: "Receiptify",
    description: "Inspired by Spotify wrapped, download music receipts showcasing your favourite artists and tracks and share them with your friends",
    type: "App",
    className: "receiptify",
  },
  {
    icon: growthIcon,
    link: "https://www.verbeekslandscaping.com",
    title: "Verbeek's Farm & Garden Centre",
    description: "An e-commerce website for a farm and garden centre selling plants, boots, gardening tools, and more",
    type: "Shop",
    className: "verbeeks",
  },
  {
    icon: notesIcon,
    link: "https://webapp-notes.netlify.app/",
    title: "Notes",
    description: "Jot down lists, to-dos, lyrics, and birthdays to remember all in one place, whenever you need them",
    type: "App",
    className: "notes",
  },
  {
    icon: keyboardIcon,
    link: "https://seandaniel.github.io/git-check/",
    title: "Git Check",
    description: "Search fellow coders, view their projects, and discover their most used programming languages",
    type: "App",
    className: "gitcheck"
  },
  {
    icon: golfIcon,
    link: "https://goodthingsgolf.netlify.app/",
    title: "Good Things Golf",
    description: "A masonry golf photo gallery",
    type: "Photos",
    className: "goodthingsgolf",
  },
];

export default projectList;
