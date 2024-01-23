import Card from '../Card/Card';
import datas from '../../utils/datas';

import './CardsList.scss';

function CardsList() {
  return (
    <aside className="cardsList">
      {datas.map((website) => {
        return (
          <Card
            key={website.id}
            name={website.name}
            title={website.title}
            url={website.url}
            description={website.description}
            details={website.details}
          />
        );
      })}
    </aside>
  );
}

export default CardsList;
