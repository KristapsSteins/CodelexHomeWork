import { NavLink } from "react-router-dom";
import "./NavBar.scss";


const NavBar = () => {
    return (
        <div>
            <nav className='nav'>
                <NavLink to="/" className={"nav-item"}>Home</NavLink> &nbsp;
                <NavLink to="/blog" className={"nav-item"}>Blog</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;
