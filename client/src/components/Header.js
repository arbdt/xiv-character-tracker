// imports
import {Link} from "react-router-dom";
import logo from "../logo.png";

// define component
function Header(){
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="logo"/> XIV Character Tracker
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/user" className="nav-link" userId="1">User Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

// export component
export default Header;