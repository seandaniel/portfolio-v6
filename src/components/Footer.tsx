export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">
          <div>
            <h2>
              Sean de Groot is a web developer who builds things on the
              internet.
            </h2>
          </div>
          <nav className="connect-nav">
            <h4>Connect</h4>
            <ul className="connect-ul">
              <li>
                <a
                  target="_blank"
                  href="https://open.spotify.com/user/223qiiof6fhdany67yewp3a3i?si=42ec0afced384a01"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.github.com/seandaniel">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:degroot.sd@gmail.com">Email</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
