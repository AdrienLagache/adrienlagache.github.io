import './Header.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="header-network">
        <ul className="header-network__list">
          <li className="header-network__item">
            <a href="https://www.linkedin.com/in/adrien-lagache-163462282/">
              <img
                className="header-network__pic"
                src="/assets/linkedin_icon.png"
                alt="Le logo de Linkedin"
              />
            </a>
          </li>
          <li className="header-network__item">
            <a href="mailto:lagacheadrien64@gmail.com">
              <img
                className="header-network__pic"
                src="/assets/gmail_icon.png"
                alt="Le logo de Gmail"
              />
            </a>
          </li>
          <li className="header-network__item">
            <a href="https://github.com/AdrienLagache">
              <img
                className="header-network__pic"
                src="/assets/github_icon.png"
                alt="Le logo de GitHub"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
