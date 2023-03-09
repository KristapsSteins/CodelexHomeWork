import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="d-grid gap-4 pt-4">
                <h1>{t("Rock-Scissors-Paper-Lizard-Spock")}</h1>
                <p>{t("Rock-Paper-Scissors-Lizard-Spock is a variation of the classic game of Rock-Paper-Scissors that adds two additional options: Lizard and Spock. The game was popularized by the TV series The Big Bang Theory.")}</p>
                <Link to={"/game"}>
                    <div className="btn-box">
                        <button className="play-btn">{t("Play")}</button>
                    </div>
                </Link>
            </div>
        </>
        
    );
};

export default Home;