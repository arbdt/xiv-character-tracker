// this component is for a page or section to display the retrieved and/or saved details for a specified character

// imports -----
import React, {useEffect, useState} from "react";
import ClassJob from "./ClassJob";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import XIVAPI from "xivapi-js";
const xiv = new XIVAPI();
const {isAuthenticated} = useAuth0;


// define component -----
function CharacterSheet(props){
    // vars
    let characterId = props.match.params.charId; // get charId from URL
    
    // useState to store xivapi character data
    let [freshCharacter, setFreshCharacter] = useState({
        charId: 0,
        charName: "",
        charServer: "",
        charAvatar: "",
        charPortrait: "",
        charClasses: [],
        achievementCount: 0,
        achievementPoints: 0,
        minionCount: 0,
        mountCount: 0,
    });

    // useState to store database character data
    let [oldCharacter, setOldCharacter] = useState({
        charId: 0,
        charName: "",
        charServer: "",
        charAvatar: "",
        charPortrait: "",
        charClasses: [],
        achievementCount: 0,
        achievementPoints: 0,
        minionCount: 0,
        mountCount: 0,
    });

    // useEffect to call XIVAPI for new information
    useEffect( () =>{

        // get XIVAPI data
        getXivapiData(characterId).then( (result) => {
            //console.log(result);
            let jobList = result.Character.ClassJobs.map( (job) => {
                return {
                    charId: characterId,
                    classjobName: job.UnlockedState.Name,
                    classjobFullname: job.Name,
                    classjobLevel: job.Level,
                    currentExp: job.ExpLevel,
                    maxExp: job.ExpLevelMax}
            });
            // make new character object from new data
            let newCharData = {
                charId: characterId,
                charName: result.Character.Name,
                charServer: result.Character.Server,
                charAvatar: result.Character.Avatar,
                charPortrait: result.Character.Portrait,
                charClasses: jobList,
                minionCount: result.Minions.length,
                mountCount: result.Mounts.length
            };
            // update state with new data
            setFreshCharacter(newCharData);
        });

        // get database data
        getMongooseData(characterId).then( result => {
            let oldCharData = result;
            setOldCharacter(oldCharData);
        });
    
    },[characterId]);

    // additional functions -----
    // function to retrieve data from XIVAPI
    const getXivapiData = async (char_id) => {
        try{
            let result = await xiv.character.get(char_id);
            return result;
        } catch(error) {
            console.error(error);
        }
    }

    // call API to get existing information from server
    const getMongooseData = async (character) => {
        try {
            let response = await axios.get(`/api/character/${character}`);
            if (response.data !== null){
                // return the data if it exists
                console.log(response.data);
                return response.data;
            }
        } catch (error){
            console.error(error);
        }
    }

    // button handler
    const handleSaveBtn = (event) => {
        event.preventDefault();

        saveCharData(freshCharacter);

        event.target.className="btn btn-secondary";
    }

    // function to save data
    const saveCharData = (character) => {
    // post character data to db
        axios.post(`/api/character`, character).then( output => {
            if (output !== null){
                console.log("Character data has been saved.")
            }
        });
    }


    // component output -----
    return(
        <div className="card m-4 characterSheet">
            <div className="card-body">
                <h3 className="card-title">{freshCharacter.charName !== ""?  `${freshCharacter.charName} of ${freshCharacter.charServer}` : `Loading data...`} </h3>
                {isAuthenticated? 
                <button className="btn btn-success" onClick={handleSaveBtn}><i className="fas fa-save"></i> Click here to manually save data.</button> : <></>}
                <div className="row">
                    <div className="col-4">
                        <img src={freshCharacter.charAvatar} alt={freshCharacter.charName}/>
                    </div>
                    <div className="col-8">
                        <p>Minions: {freshCharacter.minionCount} {oldCharacter !== undefined && freshCharacter.minionCount > oldCharacter.minionCount ?
                            <span className="trackedChange"> +{freshCharacter.minionCount - oldCharacter.minionCount}</span> : <></>}</p>
                        <p>Mounts: {freshCharacter.mountCount} {oldCharacter !== undefined && freshCharacter.mountCount > oldCharacter.mountCount ?
                            <span className="trackedChange"> +{freshCharacter.mountCount - oldCharacter.mountCount}</span> : <></>}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h4>Classes and Jobs:</h4>
                    </div>
                    <div className="row row-cols-4">
                        {freshCharacter.charClasses !== undefined? freshCharacter.charClasses.map( (classJob) => {
                            let oldJob = {};
                            if (oldCharacter !== undefined && oldCharacter.charClasses !== []){
                                for (const job of oldCharacter.charClasses){
                                    if (job.classjobFullname === classJob.classjobFullname){
                                        oldJob = job;
                                    }
                                }
                            }
                            return (
                                <ClassJob newJobData={classJob} oldJobData={oldJob} key={classJob.classjobName}></ClassJob>
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