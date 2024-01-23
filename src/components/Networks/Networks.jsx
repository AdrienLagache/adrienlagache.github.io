import './Networks.scss';

function Networks() {
  return (
    <nav className="networks">
      <ul className="networks__list">
        <li className="networks__item">
          <a href="https://www.linkedin.com/in/adrien-lagache-163462282/">
            <img
              className="networks__pic"
              src="/assets/linkedin.png"
              alt="Le logo de Linkedin"
            />
          </a>
        </li>
        <li className="networks__item">
          <a href="mailto:lagacheadrien64@gmail.com">
            <img
              className="networks__pic"
              src="/assets/gmail.png"
              alt="Le logo de Gmail"
            />
          </a>
        </li>
        <li className="networks__item">
          <a href="https://github.com/AdrienLagache">
            <img
              className="networks__pic"
              src="/assets/github.png"
              alt="Le logo de GitHub"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Networks;
