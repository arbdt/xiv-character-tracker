// this component is displayed to logged-in users
// it will display a list of saved characters with options to delete or refresh each character, or click on a character for details

// imports ----
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";

// additional functions ----

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
const removeUserChar = async (userInfo, charId) =>{
    try {
        let response = await axios.put("/api/user/characters/remove", {userId: userInfo.userIdentity, charId: charId});
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
    removeUserChar(event.target.dataset.user, event.target.dataset.char);
}

// call API to get character information from server
const getMongooseData = async (charIdList) => {
    try {
        console.log(`searching for characters with IDs ${charIdList}`);
        let response = await axios.post(`/api/user/characters`, {data: charIdList});
        if (response.data !== null){
            return response.data;
        }
    } catch (error){
        console.error(error);
    }
}

// define component -----
function UserPage(props){
    // get Auth0 data
    const {user, isAuthenticated, isLoading} = useAuth0();

    // set userID from user object
    let userId = "";
    console.log(`isAuthenticated: ${isAuthenticated}`);
    if (!isAuthenticated){
        console.log(`isLoading: ${isLoading}`);
    }
    if(isAuthenticated){
        //if (!isLoading){
            userId = user.sub;
        //}
    }

    // vars and states
    //let userId; //= (user !== {}? userSubstring : ""); // user identification
    let [userInfo, setUserInfo] = useState();
    let [registeredChars, setRegisteredChars] = useState([]);

    // useEffects ----
    useEffect(() => {
        // get user data
        if (isAuthenticated){
            if (userId !== ""){
                getUserData(userId).then( output => {
                    setUserInfo(output);
                    console.log(`userInfo: ${userInfo}`);
                });
            }
        }
    },[userId, isAuthenticated]);

    useEffect(() => {
        // get character data
        if (userInfo !== undefined && userInfo.savedCharacters !== undefined){
            console.log(`retrieving character data for user ${userInfo.userIdentity}`);
            getMongooseData(userInfo.savedCharacters).then(output => {
                 setRegisteredChars(output);
            });
        }
    },[userInfo]);

    return(
    // display list of registered characters
    // click through to display Character Sheet,
    // or remove saved character
    <div>
        <h3>Welcome User {userId !== ""? userId : ""}!</h3>
        <p>{registeredChars.length !== 0 ?  "You've saved the following characters in our database:" : "You have no saved characters."}</p>

        <div>
            <ul className="list-group"> {/* list to display results of search */}
                {registeredChars.length !== 0 && registeredChars[0] !== undefined ? registeredChars.map( (entry) => {
                    return (
                        <li key={entry.charId} className="list-group-item">
                            <img src={entry.charAvatar} alt={entry.charName} width="64" height="64"/>
                            &emsp; {entry.charName} &emsp; {entry.charServer}
                            &emsp; <a className="btn btn-primary" href={"/character/" + entry.charId}><i className="fas fa-eye"></i> View</a>
                            &emsp; <button className= "btn btn-danger" onClick={handleClickRemove} data-char={entry.charId} data-user={userInfo}><i className="fas fa-user-minus"></i> Untrack</button>
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