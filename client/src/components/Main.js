// this component represents the initial landing page of the website

// imports
import React from "react";
import CharSearch from "./CharSearch";

// component definition
function Main(){

    // output visual content
    return (
        <div className="jumbotron">
            <h1 className="display-4">XIV Character Tracker</h1>
            <p className="lead">Welcome to the XIV Character Tracker. Use the form below to find and display the profile of a character.</p>
            <hr className="my-4"/>
            <p>To track a character's progress, first log in using the  button above. Search for a character and click "Track" to register them to your user profile.
                Then, click "View" to access the character's profile. Click "Save" to store the character's current data for later comparison.
            </p>
            <CharSearch></CharSearch>
        </div>
    );
}

// export component
export default Main;