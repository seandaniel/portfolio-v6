import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [active, setActive] = useState("All");

  const phrases = ["Web Developer", "Snowboarder", "Golfer", "Open for work"];
  const typingSpeed = 200;
  const backspaceSpeed = 100;
  const pauseTime = 1000;

  const pagesArray = [
    { url: "", pageName: "All" },
    { url: "clients", pageName: "Clients" },
    { url: "personal", pageName: "Personal" },
    { url: "media", pageName: "Media" },
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prevText) => prevText.slice(0, prevText.length - 1));
      }, backspaceSpeed);
    } else {
      if (text === phrases[index]) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(phrases[index].slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    if (text === phrases[index]) {
      setCursorVisible(true);
    } else {
      setCursorVisible(false);
    }

    if (text === "" && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);

  const toggleColor = (pageName: string) => {
    setActive(pageName);
  };

  return (
    <>
      <header className="title-header">
        <div className="wrapper">
          <div className="title-contact-container">
            <div className="name-title-container">
              <h1>Sean de Groot</h1>
              <h2 className={cursorVisible ? "cursor-visible" : ""}>{text}</h2>
            </div>
            <a href="mailto:degroot.sd@gmail.com">Contact</a>
          </div>
        </div>
      </header>
      <header>
        <div className="wrapper">
          <nav className="header-nav">
            <ul>
              {pagesArray.map(({ url, pageName }, index) => (
                <li key={index}>
                  <Link
                    onClick={() => toggleColor(pageName)}
                    to={`/${url}`}
                    className={active === pageName ? "active" : ""}
                  >
                    {pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
