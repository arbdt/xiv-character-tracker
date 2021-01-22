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
const removeUserChar = async (charId) =>{
    let userId = userInfo.userIdentity;
    let newCharList = userInfo.savedCharacters.filter(function (idNumber){
        return idNumber !== charId;
    });
    try {
        let response = await axios.put("/api/user/characters/remove", {userId: userId, idList: newCharList});
        if (response.data !== null){
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
}

// function to handle clicking on "remove"
function handleClickRemove(event){
    event.preventDefault();

    // call removeuserchar
    removeUserChar(event.target.dataset.char);
}

// call API to get character information from server
const getMongooseData = async (charIdList) => {
    try {
        let response = await axios.post(`/api/user/characters`, {data: charIdList});
        if (response.data !== null){
            console.log(`The result is ${JSON.stringify(response.data)}`);
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
            getMongooseData(userInfo.savedCharacters).then(output => {
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
                {registeredChars.length !== 0 && registeredChars[0] !== undefined ? registeredChars.map( (entry) => {
                    return (
                        <li key={entry.charId} className="list-group-item">
                            <img src={entry.charAvatar} alt={entry.charName} width="64" height="64"/>
                            &emsp; {entry.charName} &emsp; {entry.charServer}
                            &emsp; <a href={"/character/" + entry.charId}><i class="fas fa-eye"></i> View</a>
                            &emsp; <button onClick={handleClickRemove} data-char={entry.charId}><i className="fas fa-user-slash"></i> Untrack</button>
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