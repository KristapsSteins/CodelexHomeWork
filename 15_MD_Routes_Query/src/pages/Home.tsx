import NavBar from '../components/NavBar';
const Home = () => {
    
    return (
        <>
            <div className="container">
                <NavBar /> 
                <div>
                    <h1 className="text-center mt-2">The Rick and Morty API</h1>
                    <img className="img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rick_and_Morty_title_card_%28cropped%29.png/1280px-Rick_and_Morty_title_card_%28cropped%29.png" alt="" />
                </div>
            </div>
            
        </>
    );
};

export default Home;

