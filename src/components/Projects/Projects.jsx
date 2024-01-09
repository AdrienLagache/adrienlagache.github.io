import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import themesList from '../../datas/themes';

import './Projects.scss';

function Projects() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1220px)' });
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <section className="projects-wrapper">
      <h1
        className={`projects-title projects-title__${themesList[themeIndex]}`}
      >
        Projets
      </h1>
      <nav className="projects-nav">
        <ul className="projects-list">
          <li className="projects-list__item">
            <a
              className={`projects-list__link projects-list__${themesList[themeIndex]}`}
              href="https://github.com/AdrienLagache/CFDR"
            >
              C.F.D.R.
              {isDesktop && (
                <span>&ensp;- Championnat Francophone Dirt Rally 2.0</span>
              )}
            </a>
          </li>
          <li>
            <a
              className={`projects-list__link projects-list__${themesList[themeIndex]}`}
              href="https://github.com/AdrienLagache/challenge-Orecipes"
            >
              O&apos;Recipe
              {isDesktop && <span>&ensp;- challenge de formation</span>}
            </a>
          </li>
          <li className="projects-list__item">
            <a
              className={`projects-list__link projects-list__${themesList[themeIndex]}`}
              href="https://github.com/AdrienLagache/MapTalents/tree/main"
            >
              MapTalents{isDesktop && <span>&ensp;- projet de soutenance</span>}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Projects;
