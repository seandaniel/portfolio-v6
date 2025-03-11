import growthIcon from "../assets/growth.svg";
import musicSceneIcon from "../assets/music-scene.svg";
import golfIcon from "../assets/golf.svg";
import notesIcon from "../assets/notes.svg";
import sunIcon from "../assets/sun.svg";
import fuelIcon from "../assets/rocket.svg";
import mountainIcon from "../assets/mountain.svg";

const projectList = [
  {
    icon: growthIcon,
    link: "https://www.verbeekslandscaping.com",
    title: "Verbeek's Farm & Garden Centre",
    description: "An e-commerce shop powered by Shopify",
    type: "Shop",
    className: "verbeeks",
  },
  {
    icon: musicSceneIcon,
    link: "https://receiptify-v2.netlify.app/",
    title: "Receiptify",
    description: "Like Spotify wrapped, but with receipts",
    type: "App",
    className: "receiptify",
  },
  {
    icon: notesIcon,
    link: "https://webapp-notes.netlify.app/",
    title: "Notes",
    description: "Jot down lists, to-dos, lyrics, code, birthdays",
    type: "App",
    className: "notes",
  },
  {
    icon: golfIcon,
    link: "https://goodthingsgolf.netlify.app/",
    title: "Good Things Golf",
    description: "A masonry golf photo gallery",
    type: "Photos",
    className: "goodthingsgolf",
  },
  {
    icon: sunIcon,
    link: "https://open.spotify.com/playlist/5YgbIoNbuNGPTyThjHZPSY?si=663313e0302948f5",
    title: "Zen",
    description: "A lofi playlist for flow state",
    type: "Playlist",
    className: "zen",
  },
  {
    icon: fuelIcon,
    link: "https://open.spotify.com/playlist/4uH2mfivSNIZeHXrndnzjx?si=d3d8f474ed874360",
    title: "Fuel",
    description: "An uptempo playlist to get hyped up",
    type: "Playlist",
    className: "fuel",
  },
  {
    icon: mountainIcon,
    link: "https://www.youtube.com/watch?v=HEabNO4aqWM",
    title: "Decemburrr",
    description: "A video of the white room (snowboarding)",
    type: "Video",
    className: "decemburrr",
  },
];

export default projectList;
