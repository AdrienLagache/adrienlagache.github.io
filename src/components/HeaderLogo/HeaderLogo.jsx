import { useSelector } from 'react-redux';
import themesList from '../../datas/themes';

import './HeaderLogo.scss';

function HeaderLogo() {
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <div className={`header-logo header-logo__${themesList[themeIndex]}`}>
      {/* <h1 className="header-logo__letter" id="a-letter">
        A<span id="firstname">drien</span>
      </h1>
      <h1 className="header-logo__letter" id="l-letter">
        L<span id="name">agache</span>
      </h1> */}
      <img
        src={`/assets/header_logo-${themesList[themeIndex]}.png`}
        alt="Le logo du site"
      />
    </div>
  );
}

export default HeaderLogo;
