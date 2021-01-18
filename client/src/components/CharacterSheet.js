// this component is for a page or section to display the retrieved and/or saved details for a specified character

// imports
import {React, useEffect, useState} from "react";
import ClassJob from "./ClassJob";
import axios from "axios";
import XIVAPI from "xivapi-js";
const xiv = new XIVAPI();

// function to retrieve data from XIVAPI
const getXivapiData = async (char_id) => {
    try{
        let result = await xiv.character.get(char_id);
        return result;
    } catch(error) {
        console.error(error);
    }
}

// define component
function CharacterSheet(props){
    // vars
    let characterId = props.match.params.charId; // get charId from URL
    
    // useState to store character data
    let [freshCharacter, setFreshCharacter] = useState({
        charId: "",
        charName: "",
        charServer: "",
        charPortrait: "",
        charClasses: [],
        achievementCount: 0,
        achievementPoints: 0,
        minionCount: 0,
        mountCount: 0,
    });

    // call API to get existing information from server

    // useEffect to call XIVAPI for new information
    useEffect( () =>{
        // get XIVAPI data
        getXivapiData(characterId).then( (result) => {
            console.log(result);
            // make new character object from new data
            let newCharData = {
                charId: characterId,
                charName: result.Character.Name,
                charServer: result.Character.Server,
                charPortrait: result.Character.Portrait,
                charClasses: result.Character.ClassJobs,
                minionCount: result.Minions.length,
                mountCount: result.Mounts.length
            };
            // update state with new data
            setFreshCharacter(newCharData);
        });
    },[characterId]);

    // component output    
    return(
        <div className="card characterSheet">
            <h3 className="card-title">{freshCharacter.charName} of {freshCharacter.charServer}</h3>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <p>Minions: {freshCharacter.minionCount}</p>
                        <p>Mounts: {freshCharacter.mountCount}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={freshCharacter.charPortrait} alt={freshCharacter.charName}/>
                    </div>
                    <div className="col">
                        {freshCharacter.charClasses !== undefined? freshCharacter.charClasses.map( (classJob) => {
                            return (
                                <ClassJob classJob={classJob} key={classJob.JobID}></ClassJob>
                            );
                        }) : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

 // export component
 export default CharacterSheet;