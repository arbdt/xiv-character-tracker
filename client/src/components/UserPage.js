// this component is displayed to logged-in users
// it will display a list of saved characters with options to delete or refresh each character, or click on a character for details

// imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// function to call database to retrieve user-associated content
const getUserData = async (userToken) => {
    try {
        let response = await axios.get(`/api/user/${userToken}`);
        if (response.data !== null){
            // return the data if it exists
            return response.data;
        }
    } catch (error){
        console.error(error);
    }
}

// function to update user-associated content (for removing a tracked character)
function setUserChars(userToken){

}

// call API to get character information from server
const getMongooseData = async (charId) => {
    try {
        let response = await axios.get(`/api/character/${charId}`);
        if (response.data !== null){
            console.log(`The result for ${charId} is ${JSON.stringify(response.data)}`);
            return response.data;
        }
    } catch (error){
        console.error(error);
    }
}

// define component
function UserPage(props){
    // vars and states
    let userId = props.match.params.userId; // user identification
    let [userInfo, setUserInfo] = useState();
    let [registeredChars, setRegisteredChars] = useState([]);

    // useEffects
    useEffect(() => {
        // get user data
        if (userId !== undefined){
            getUserData(userId).then( output => {
                console.log(`retrieving user data: ${output}`);
                setUserInfo(output);
            });
        }
    },[userId]);

    useEffect(() => {
        // get character data
        if (userInfo !== undefined && userInfo.savedCharacters !== undefined){
            console.log(`retrieving character data`);
            getMongooseData(userInfo.savedCharacters[0]).then(output => {
                setRegisteredChars(registeredChars => [...registeredChars, output]);
            });
        }
    },[userInfo]);

    return(
    // display list of registered characters
    // click through to dislay Character Sheet,
    // or delete or update
    <div>
        <h3>Welcome User {userInfo !== undefined? userInfo.userIdentity : ""}!</h3>
        <p>{registeredChars.length !== 0 ?  "You've saved the following characters in our database:" : "You have no saved characters."}</p>

        <div>
            <ul className="list-group"> {/* list to display results of search */}
                {registeredChars.length !== 0 ? registeredChars.map( (entry) => {
                    return (
                        <li key={entry.charId}>
                            <img src={entry.charAvatar} alt={entry.charName} width="64" height="64"/>
                            &emsp; {entry.charName} &emsp; {entry.charServer}
                            &emsp; <a href={"/character/" + entry.charId}>View Data</a>
                            &emsp; <button onClick={() => {}}>Stop Tracking</button>
                        </li>
                    );
                })
                : <></>}
            </ul>
        </div>
    </div>
    );
    
}

// export component
export default UserPage;