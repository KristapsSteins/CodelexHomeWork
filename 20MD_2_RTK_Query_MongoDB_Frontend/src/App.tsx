import "./App.css";
import AddAnimals from "./components/AddAnimals/AddAnimals";
import GetAnimals from "./components/GetAnimals/GetAnimals";
import Header from "./components/Header/Header";

function App() {

    return (
        <>
            <div className="container">
                <Header />
                <AddAnimals />
                <GetAnimals />
            </div>
        </>
    );
}

export default App;
