import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../services/actions/themeActions';
import themesList from '../../datas/themes';

import './FooterLogo.scss';

function FooterLogo() {
  const dispatch = useDispatch();
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex="0"
      className="footer-logo"
      onClick={() => {
        if (themeIndex === 2) {
          dispatch(changeTheme(0));
        } else {
          dispatch(changeTheme(themeIndex + 1));
        }
      }}
    >
      <img
        src={`src/assets/${themesList[themeIndex]}.png`}
        alt="Un parachutiste"
      />
    </div>
  );
}

export default FooterLogo;
