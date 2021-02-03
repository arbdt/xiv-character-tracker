// this component is displayed to logged-in users
// it will display a list of saved characters with options to delete or refresh each character, or click on a character for details

// imports ----
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";

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
            console.log(`userId is set.`);
        //}
    }

    // vars and states
    let [savedCharIds, setSavedCharIds] = useState([]);
    let [savedCharData, setSavedCharData] = useState([]);

    // useEffects ----
    useEffect(() => {
        // get user data from userId
        if (userId !== ""){
            getUserData(userId).then( output => {
                setSavedCharIds(output.savedCharacters);
            });
        }
    },[userId]);

    useEffect(() => {
        // get character data from user data
        if (userId !== "" && savedCharIds !== [] ){
            console.log(`Retrieving character data.`);
            getCharData(savedCharIds).then(output => {
                 setSavedCharData(output);
            });
        }
    },[savedCharIds]);

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
    const removeUserChar = async (userId, charId) => {
        console.log(`Attempting to remove character ${charId} from profile.`);
        try {
            let response = await axios.put("/api/user/characters/remove", {userId: userId, charId: charId});
            if (response.data !== null){
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    }

    // function to handle clicking on "remove"
    const handleClickRemove = (event) => {
        event.preventDefault();

        // call removeuserchar
        removeUserChar(event.target.dataset.user, event.target.dataset.char).then( output => {
            setSavedCharIds(output.savedCharacters);

        });

        event.target.className = "btn btn-secondary";
    }

    // call API to get character information from server
    const getCharData = async (charIdList) => {
        try {
            console.log(`Searching for characters with IDs ${charIdList}`);
            let response = await axios.post(`/api/user/characters`, {data: charIdList});
            if (response.data !== null){
                return response.data;
            }
        } catch (error){
            console.error(error);
        }
    }

    // component output
    return(
    // display list of registered characters
    // click through to display Character Sheet,
    // or remove saved character
    <div className="userCard card m-4">
        <h3 className="card-header">Your Characters</h3>
        <div className="card-body">
            <p className="card-text">{savedCharData.length !== 0 ?  "You've saved the following characters in our database:" : "You have no saved characters."}</p>
            <div>
                <ul className="list-group charList"> {/* list to display results of search */}
                    {savedCharData.length !== 0 && savedCharData[0] !== undefined ? savedCharData.map( (entry) => {
                        return (
                        <li key={entry.charId} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="col">
                                <img src={entry.charAvatar} alt={entry.charName} width="64" height="64"/>
                            </div>
                            <div className="col font-weight-bold">
                                {entry.charName}
                            </div>
                            <div className="col">
                                {entry.charServer}
                            </div>
                            <div className="col">
                                <a className="btn btn-primary" href={"/character/" + entry.charId}><i className="fas fa-eye"></i><span className="d-none d-md-inline"> View</span></a>
                            </div>
                            <div className="col">
                                <button className= "btn btn-danger" onClick={handleClickRemove} data-char={entry.charId} data-user={userId}>
                                    <i className="fas fa-user-minus"></i><span className="d-none d-md-inline"> Untrack</span></button>
                            </div>   
                        </li>
                        );
                    })
                    : <></>}
                </ul>
            </div>
        </div>
    </div>
    );
    
}

// export component
export default withAuthenticationRequired(UserPage);