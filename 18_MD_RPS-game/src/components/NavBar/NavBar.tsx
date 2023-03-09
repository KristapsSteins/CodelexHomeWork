import { NavLink } from "react-router-dom";
import { useTranslation} from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <nav className='nav-i'>
            <NavLink to="/" className={"nav-item"}>{t("Home")}</NavLink> &nbsp;
            <NavLink to="/game" className={"nav-item"}>{t("Game")}</NavLink>
        </nav>
    );
};

export default NavBar;
