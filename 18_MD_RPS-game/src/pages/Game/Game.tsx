import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const images = [
    "https://static.thenounproject.com/png/88661-200.png",
    "https://static.thenounproject.com/png/88662-200.png",
    "https://static.thenounproject.com/png/88666-200.png",
    "https://static.thenounproject.com/png/88664-200.png", // spock image
    "https://static.thenounproject.com/png/88663-200.png", // lizard image
];

type Score = {
    id: string;
    playerscore: string;
    computerscore: string;
};

const Game = () => {
    const { t } = useTranslation();
    const queryClient = useQueryClient();
    const [playerIndex, setplayerIndex] = useState(0);
    const [computerIndex, setcomputerIndex] = useState(0);
    const [playerScore, setplayerScore] = useState(0);
    const [computerScore, setcomputerScore] = useState(0);
    const [tied, setTied] = useState("");
    const [playerWin, setplayerWin] = useState("");
    const [computerWin, setcomputerrWin] = useState("");
    const [isgameLoading, setisgameLoading] = useState(true);
    const [disableButtons, setDisableButtons] = useState(true);

    const getWinner = (player: number, computer: number) => {
        const outcome = (computer - player + 5) % 5;
        let tiedMsg = "";
        let playerMsg = "";
        let computerMsg = "";

        if (outcome === 0) {
            tiedMsg = t("It's a tie");
        } else if (outcome === 1 || outcome === 3) {
            setcomputerScore((prevScore) => prevScore + 1);
            computerMsg = t("Computer win");
        } else {
            setplayerScore((prevScore) => prevScore + 1);
            // handleupdatePlayerScore();
            playerMsg = t("Player win");
        }

        setTied(tiedMsg);
        setplayerWin(playerMsg);
        setcomputerrWin(computerMsg);
    };

    const makeMove = (playerChoice: number) => {
        const randomNumber = () => {
            return Math.floor(Math.random() * 5);
        };

        setisgameLoading(true);
        setDisableButtons(true);

        setTimeout(() => {
            const computerChoice = randomNumber();
            setplayerIndex(playerChoice);
            setcomputerIndex(computerChoice);
            getWinner(playerChoice, computerChoice);
            setisgameLoading(false);
            setDisableButtons(false);
        }, 200);
    };

    return (
        <>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-12">
                        <h2>{t("Choose")}</h2>
                        <button className="btn" onClick={() => makeMove(0)}>
                            <img src={images[0]} style={{ width: "100px" }} className="m-3" alt="rock" />
                        </button>
                        <button className="btn" onClick={() => makeMove(1)}>
                            <img src={images[1]} style={{ width: "100px" }} className="m-3" alt="paper" />
                        </button>
                        <button className="btn" onClick={() => makeMove(2)}>
                            <img src={images[2]} style={{ width: "100px" }} className="m-3" alt="scissors" />
                        </button>
                        <button className="btn" onClick={() => makeMove(3)}>
                            <img src={images[3]} style={{ width: "100px" }} className="m-3" alt="spock" />
                        </button>
                        <button className="btn" onClick={() => makeMove(4)}>
                            <img src={images[4]} style={{ width: "100px" }} className="m-3" alt="lizard" />
                        </button>
                    </div>
                </div>
                <div className="row mt-2 justify-content-center">
                    <div className="col-4 text-danger mt-3">
                        <h3>{playerWin}</h3>
                    </div>
                    <div className="col-3 text-danger mt-3">
                        <h3>{tied}</h3>
                    </div>
                    <div className="col-4 text-danger mt-2">
                        <h3>{computerWin}</h3>
                    </div>
                </div>
                <div className="row pt-4">
                    {!isgameLoading && (
                        <>
                            <div className="col-5 sides">
                                <img src={images[playerIndex]} style={{ width: "200px" }} className="m-3" alt="rock" />
                            </div>
                            <div className="d-flex justify-content-center col-2 hr-height">
                                <div className="vr"></div>
                            </div>
                            <div className="col-5 sides">
                                <img src={images[computerIndex]} style={{ width: "200px" }} className="m-3" alt="rock" />
                            </div>
                        </>
                    )}
                </div>
                <div className="row pt-4 justify-content-center">
                    <div className="col-4">
                        <h4>{t("Player score: ")}<span>{playerScore}</span></h4>    
                    </div>
                    <div className="col-3">
                    </div>
                    <div className="col-4">
                        <h4>{t("Computer score: ")}<span>{computerScore}</span></h4>    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Game;