import { useEffect, useState } from 'react';
import './Header.scss';
import Networks from '../Networks/Networks';

function Header() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // const cls = visible ? 'visible' : 'hidden';
  return (
    <header className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <h1>Adrien Lagache</h1>
      <Networks />
    </header>
  );
}

export default Header;
