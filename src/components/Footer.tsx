export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">
          <div>
            <h2>
              Sean de Groot is a web developer who builds things on the internet
              and
              <br></br> enables brands to showcase their products and services
              around the world. <br></br>Interested in working together? Get in
              touch.
            </h2>
          </div>
          <nav className="connect-nav">
            <h4>Connect</h4>
            <ul className="connect-ul">
              <li>
                <a target="_blank" href="https://www.instagram.com/grootsy">
                  Instagram
                </a>
              </li>
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
                <a href="mailto:degroot.sd@gmail.com">E-mail</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
