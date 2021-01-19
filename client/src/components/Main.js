// this component represents the initial landing page of the website

// imports
import CharSearch from "./CharSearch";

// component definition
function Main(){

    // output visual content
    return (
        <div>
            <p>Welcome to X|V Character Tracker. Use the form below to find and display the profile of a character.</p>
            <p>Log in using [insert authorisation service here] to save a character's current stats for comparison.</p>
            <CharSearch></CharSearch>
        </div>
    );
}

export default Main;