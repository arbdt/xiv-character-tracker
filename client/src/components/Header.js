// imports
import logo from "../logo.png";

// define component
function Header(){
    return (
        <header className="header">
            <h1><img src={logo} alt="logo" height="32"/> XIV Character Tracker</h1>
        </header>
    );
}

// export component
export default Header;