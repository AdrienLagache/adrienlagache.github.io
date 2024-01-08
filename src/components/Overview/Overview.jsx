import { useSelector } from 'react-redux';

import themesList from '../../datas/themes';

import './Overview.scss';

function Overview() {
  const themeIndex = useSelector((state) => state.theme.themeIndex);

  return (
    <section className="overview-wrapper">
      <h1
        className={`overview-title overview-title__${themesList[themeIndex]}`}
      >
        Bonjour
      </h1>
      {themeIndex === 0 && (
        <p className="overview-description overview-description__para">
          Ancien militaire pendant 5 ans, j&apos;ai acquis un esprit
          d&apos;équipe solide et une grande adaptabilité. En tant que
          responsable transmission j&apos;ai appris à manipuler des informations
          sensibles en respectant les procédures, codes et chiffrement tout en
          composant avec les limites techniques des différents matériels, gammes
          de fréquence et languages utilisés dans des conditions changeantes et
          parfois extrèmes.
        </p>
      )}
      {themeIndex === 1 && (
        <p className="overview-description overview-description__build">
          Avec 8 ans d&apos;expérience en maçonnerie et façade, j&apos;ai
          renforcé mon autonomie et ma rigueur dans des tâches ausssi bien
          techniques qu&apos;esthétiques sur des projets à court, moyen et long
          terme. J&apos;ai appris à développer et adapter mes compétences au fur
          et à mesure de mes expériences afin de répondre à des exigences de
          rentabilité, tout en respectant les règles de l&apos;art.
        </p>
      )}
      {themeIndex === 2 && (
        <p className="overview-description overview-description__dev">
          Grâce à ma formation avec O&apos;clock, j&apos;ai développé des
          compétences approfondies en développement web. En plus de la création
          de sites statiques en HTML/CSS, l&apos;utilisation de PHP, JavaScript,
          des concepts de la POO et de l&apos;architecture MVC, j&apos;ai
          développé des compétences en Laravel, REACT, et NestJs. En suivant la
          méthodologie AGILE, j&apos;ai appris à gérer des projets de manière
          efficace, consolidant ainsi ma polyvalence pour relever divers défis
          professionnels. J&apos;ai obtenu mon titre de développeur web et web
          mobile le 12 Décembre 2023.
        </p> // TODO: Paragraphe sur la formation
      )}
      {themeIndex !== 2 && (
        <p className="overview-description__static">
          Aujourd&apos;hui, je me réoriente vers le développement web en
          combinant ma passion pour la technologie avec mes qualités
          d&apos;esprit d&apos;équipe, d&apos;adaptabilité et d&apos;autonomie.
        </p>
      )}
    </section>
  );
}

export default Overview;
