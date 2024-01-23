import Networks from '../Networks/Networks';
import './Overview.scss';

function Overview() {
  return (
    <section className="overview">
      <p className="overview-description">
        <em>Développeur web</em> complet maîtrisant les principes du
        développement avec <strong>PHP</strong> et <strong>Javascript</strong>,
        ainsi que :{' '}
      </p>
      <ul className="overview-list">
        <li className="overview-list__item">
          <strong>REACT</strong> pour la création d&apos;
          <em>interfaces utilisateurs</em> et backoffice.
        </li>
        <li className="overview-list__item">
          <strong>NestJS</strong> et <strong>Laravel</strong> pour la création
          d&apos;APIs et composants d&apos;accés aux données.
        </li>
      </ul>

      <p>
        Ma force réside dans ma capacité à naviguer avec aisance entre le
        front-end et le back-end.
      </p>
    </section>
  );
}

export default Overview;
