import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import themesList from '../../datas/themes';

import './Projects.scss';

function Projects() {
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <section className="projects-wrapper">
      <h2 className="projects-title">Projets</h2>
      <nav className={`projects-nav projects-nav__${themesList[themeIndex]}`}>
        <ul className="projects-list">
          <li className="projects-list__item">
            <p>
              <a className="projects-list__link" href="https://cfdr.fr">
                C.F.D.R.
              </a>
              {isDesktop &&
                ' - projet pour le Championnat Francophone Dirt Rally 2.0'}
            </p>
          </li>
          <li>
            <p>
              <a className="projects-list__link" href="https://cfdr.fr">
                O&apos;Recipe
              </a>
              {isDesktop && ' - challenge de formation'}
            </p>
          </li>
          <li className="projects-list__item">
            <p>
              <a className="projects-list__link" href="https://cfdr.fr">
                MapTalents
              </a>
              {isDesktop && '- projet de soutenance'}
            </p>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Projects;
