import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import FullscreenImage from './components/FullscreenImage';

function App() {
    const postsQuery = useQuery({
        queryKey: ['results'],
        queryFn: () =>
            axios.get('https://rickandmortyapi.com/api/character/')
                .then((res) => res.data)
                .then((data) => data.results)
    });

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/characters" element={<Characters characters={postsQuery.data} />}/>
                <Route path="/about" element={<About characters={postsQuery.data} />}/>
                <Route path="/characters/:id" element={<FullscreenImage />} />
            </Routes>
        </>
    );
}

export default App;
