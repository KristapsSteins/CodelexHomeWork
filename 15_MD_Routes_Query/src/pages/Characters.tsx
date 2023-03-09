import BuildCard from '../components/BuildCard';
import NavBar from '../components/NavBar';

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

const Characters = ({ characters }: {characters: Characters[]}) => {
    if (!characters) return <h1>Loading...</h1>;
  
    return (
        <> 
            <div className="container">
                <NavBar />
                <h1 className="text-center mt-2">All Characters</h1>
                <div className="cardBox">
                    {characters.map((card: Characters) => <BuildCard key={card.id} cards={card} />)}
                </div>
            </div>
        </>
    );
};
  
export default Characters;
