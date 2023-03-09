type Characters = {
    id: string
    name: string
    status: string
    species: string
    image: string
    location: Where
    episode: string
  }

type Where = {
    name: string
    url: string
}

const AboutBuild = ({ cards}: { cards: Characters}) => {
    return (
        <>
            <div className="card m-2">
                <div className="image">
                    <img className="img" src={cards.image} alt={cards.name} />
                </div>
                <div>
                    <h3>{cards.name}</h3>
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default AboutBuild;
