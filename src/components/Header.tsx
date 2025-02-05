import { useState, useEffect } from "react";

export const Header = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const phrases = [
    "Web Developer",
    "Snowboarder",
    "Golfer",
    "Great w/ the aux cord",
    "Open for work",
  ];
  const typingSpeed = 200;
  const backspaceSpeed = 100;
  const pauseTime = 1000;

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
    </>
  );
};
