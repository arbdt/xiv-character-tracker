// this is for the header menu bar

// imports
import React from "react";
import {Link} from "react-router-dom";
import logo from "../logo.png";
import AuthNav from "./AuthNav";

// define component
function Header(){
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/> XIV Character Tracker
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/user`} className="nav-link">User Page</Link>
                    </li>
                </ul>
                
                <AuthNav></AuthNav>
            </nav>
        </header>
    );
}

// export component
export default Header;