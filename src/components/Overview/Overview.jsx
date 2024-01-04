import { useSelector } from 'react-redux';
import './Overview.scss';

function Overview() {
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <section className="overview-wrapper">
      <h1 className="overview-title">Welcome</h1>
      {themeIndex === 0 && (
        <p className="overview-description__para">
          Ancien militaire pendant 5 ans, j&apos;ai acquis un esprit
          d&apos;équipe solide et une grande adaptabilité.
        </p>
      )}
      {themeIndex === 1 && (
        <p className="overview-description__build">
          Avec 8 ans d&apos;expérience en maçonnerie et façade, j&apos;ai
          renforcé mon autonomie et ma rigueur.
        </p>
      )}
      {themeIndex === 2 && (
        <p className="overview-description__dev">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          inventore, molestiae, fugit pariatur architecto sequi.
        </p> // TODO: Paragraphe sur la formation
      )}
      <p>
        Aujourd&apos;hui, je me réoriente vers le développement web en combinant
        ma passion pour la technologie avec mes qualités d&apos;esprit
        d&apos;équipe, d&apos;adaptabilité et d&apos;autonomie.
      </p>
    </section>
  );
}

export default Overview;
