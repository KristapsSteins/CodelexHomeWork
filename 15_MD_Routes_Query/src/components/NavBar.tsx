import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/characters">Characters</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
