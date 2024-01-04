import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Projects from '../Projects/Projects';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import FooterLogo from '../FooterLogo/FooterLogo';
import themesList from '../../datas/themes';

import './App.scss';

function App() {
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <div className="App">
      <div className={`custom-border ${themesList[themeIndex]}`}>
        <div className="app-wrapper">
          <header>
            <HeaderLogo />
            <Header />
          </header>
          <main className="main-wrapper">
            <Overview />
            <Projects />
          </main>
          <footer>
            <p>Lorem ipsum dolor sit amet 2024</p>
          </footer>
          <FooterLogo />
        </div>
      </div>
    </div>
  );
}

export default App;
