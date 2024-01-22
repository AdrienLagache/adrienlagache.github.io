import { useSelector } from 'react-redux';

// import Header from '../Header/Header';
// import Overview from '../Overview/Overview';
// import Projects from '../Projects/Projects';
// import HeaderLogo from '../HeaderLogo/HeaderLogo';
// import FooterLogo from '../FooterLogo/FooterLogo';
import themesList from '../../datas/themes';

import './App.scss';

function App() {
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <div className="App">
      <div className={`custom-border ${themesList[themeIndex]}`}>
        <div className="app-wrapper">
          <p>
            Site momentanément indisponible, refonte en cours
            <br />
            Vous pouvez accéder à mes projets ici :
          </p>
          <ul>
            <li>
              <a href="https://cfdr.fr" target="_blank" rel="noreferrer">
                C.F.D.R. - side-project réalisé avec PHP, une architecture MVC
                et composer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AdrienLagache/challenge-Orecipes"
                target="_blank"
                rel="noreferrer"
              >
                O&apos;Recipe (lien github) - challenge de formation réalisé
                avec REACT et Redux, utilisation des Hooks et proptypes
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AdrienLagache/MapTalents-Soutenance"
                target="_blank"
                rel="noreferrer"
              >
                MapTalents (lien github) - projet de fin de formation présenté
                au titre. Réalisé avec React et NestJS
              </a>
            </li>
          </ul>
          {/* <header>
            <HeaderLogo />
            <Header />
          </header>
          <main className="main-wrapper">
            <Overview />
            <Projects />
          </main> */}
          {/* <footer><p>Lorem ipsum dolor sit amet 2024</p></footer> */}
          {/* <FooterLogo /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
