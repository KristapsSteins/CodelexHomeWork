import { Link } from 'react-router-dom';

type Characters = {
  id: string
  name: string
  status: string
  species: string
  image: string
  location: Where
}

type Where = {
  name: string
  url: string
}

const BuildCard = ({ cards }: { cards: Characters}) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/characters/${cards.id}`}>
            <div className="card m-2">
                <div className="image">
                    <img className="img" src={cards.image} alt={cards.name} />
                </div>
                <div>
                    <h3>{cards.name}</h3>
                </div>
                <div>
                    <p>{cards.status} - {cards.species}</p>
                </div>
                <div>
                    <p>Last seen: {cards.location.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default BuildCard;