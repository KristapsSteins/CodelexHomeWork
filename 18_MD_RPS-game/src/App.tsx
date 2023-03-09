import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Rock-Scissors-Paper-Lizard-Spock": "Rock-Scissors-Paper-Lizard-Spock",
                    "Rules": "Rules",
                    "Rock-Paper-Scissors-Lizard-Spock is a variation of the classic game of Rock-Paper-Scissors that adds two additional options: Lizard and Spock. The game was popularized by the TV series The Big Bang Theory.": "Rock-Paper-Scissors-Lizard-Spock is a variation of the classic game of Rock-Paper-Scissors that adds two additional options: Lizard and Spock. The game was popularized by the TV series The Big Bang Theory.",
                    "Play": "Play",
                    "language": "Language",
                    "Choose": "Choose:",
                    "Player score: ": "Player score: ",
                    "Computer score ": "Computer score: ",
                    "Home": "Home",
                    "Game": "Game",
                    "Thinking...": "hmm..."
                }
            },
            es: {
                translation: {
                    "Rock-Scissors-Paper-Lizard-Spock": "Piedra-Tijera-Papel-Lagarto-Spock",
                    "Rules": "Reglas",
                    "Rock-Paper-Scissors-Lizard-Spock is a variation of the classic game of Rock-Paper-Scissors that adds two additional options: Lizard and Spock. The game was popularized by the TV series The Big Bang Theory.": "Piedra-Papel-Tijera-Lizard-Spock es una variación del clásico juego de Piedra-Papel-Tijera que añade dos opciones adicionales: Lizard y Spock. El juego fue popularizado por la serie de televisión The Big Bang Theory.",
                    "Play": "Jugar",
                    "language": "Idioma",
                    "Choose": "Elegir:",
                    "Player score: ": "Puntuación del jugador: ",
                    "Computer score: ": "Puntuación de la computadora: ",
                    "Home": "Inicio",
                    "Game": "Juego",
                    "Thinking...": "hmm...",
                    "Player win": "Victoria del jugador",
                    "Computer win": "Victoria de la computadora",
                    "It's a tie": "Es una corbata"
                }
            },
            lv: {
                translation: {
                    "Rock-Scissors-Paper-Lizard-Spock": "Akmens-Šķēres-Papīrs-Ķirzaka-Spoks",
                    "Rules": "Noteikumi",
                    "Rock-Paper-Scissors-Lizard-Spock is a variation of the classic game of Rock-Paper-Scissors that adds two additional options: Lizard and Spock. The game was popularized by the TV series The Big Bang Theory.": "“Rock-Paper-Scissors-Lizard-Spock” ir klasiskās “Rock-Paper-Scissors” spēles variants, kas papildina divas papildu iespējas: “Lizard” un “Spock”. Spēli popularizēja TV seriāls lielā sprādziena teorija.",
                    "Play": "Spēlēt",
                    "language": "Valoda",
                    "Choose": "Izvēlies:",
                    "Player score: ": "Spēlētāja rezultāts: ",
                    "Computer score: ": "Datora rezultāts: ",
                    "Home": "Sākums",
                    "Game": "Spēlēt",
                    "Thinking...": "hmm...",
                    "Player win": "Spēlētājs uzvarēja",
                    "Computer win": "Dators uzvarēja",
                    "It's a tie": "Neizšķirts"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

function App() {
    const { i18n } = useTranslation();
    
    const changeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
        i18n.changeLanguage(event.target.value as string);
    };

    return (
        <>
            <div className="row d-flex justify-content-end">
                <div className="col-lg-4 col-sm-9 d-flex justify-content-end mb-1">
                    <div>
                        <select 
                            className="form-select" 
                            aria-label="Default select example" 
                            value={i18n.language}
                            onChange={changeLanguage}>
                            <option selected value="en">English</option>
                            <option value="es">Español</option>
                            <option value="lv">Latviešu</option>
                        </select>
                    </div>
                </div>
            </div>
            <NavBar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/game" index element={<Game />} />
            </Routes>
        </>
    );
}

export default App;
