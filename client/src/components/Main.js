// this component represents the initial landing page of the website

// imports
import React from "react";
import CharSearch from "./CharSearch";

// component definition
function Main(){

    // output visual content
    return (
        <div className="jumbotron">
            <h1 className="display-4">FFX|V Character Tracker</h1>
            <p className="lead">Welcome to the X|V Character Tracker. Use the form below to find and display the profile of a character.</p>
            <hr className="my-4"/>
            <p>Log in to save a character's current stats for comparison.</p>
            <div className="lead"><CharSearch></CharSearch></div>
        </div>
    );
}

// export component
export default Main;