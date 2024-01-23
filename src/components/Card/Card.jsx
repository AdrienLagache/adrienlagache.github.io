/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import PropTypes from 'prop-types';

import './Card.scss';

function Card({ name, title, url, description, details }) {
  return (
    <div className="card">
      <h2 className="card-title" dangerouslySetInnerHTML={{ __html: title }} />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`card-thumbnail card-thumbnail--${name}`}
      >
        <h3>Description</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <h3>Détails</h3>
        <p dangerouslySetInnerHTML={{ __html: details }} />
      </a>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Card;
