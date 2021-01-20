// this component represents the initial landing page of the website

// imports
import CharSearch from "./CharSearch";

// component definition
function Main(){

    // output visual content
    return (
        <div className="jumbotron">
            <h1 className="display-4">FFX|V Character Tracker</h1>
            <p className="lead">Welcome to the X|V Character Tracker. Use the form below to find and display the profile of a character.</p>
            <hr className="my-4"/>
            <p>Log in using [insert authorisation service here] to save a character's current stats for comparison.</p>
            <p className="lead"><CharSearch></CharSearch></p>
        </div>
    );
}

// export component
export default Main;