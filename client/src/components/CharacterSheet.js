// this component is for a page or section to display the retrieved and/or saved details for a specified character

// imports
import ClassJob from "./ClassJob";

// define component
function CharacterSheet({character}){
    return(
        <div className="card characterSheet">
            <h3 className="card-title">{character.name} of {character.charServer}</h3>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img src={character.portrait} alt={character.name}/>
                    </div>
                    <div className="col">
                        {charClasses !== undefined? charClasses.map( (classJob) => {
                            <ClassJob classJob={classJob}></ClassJob>
                        }) : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

 // export component
 export default CharacterSheet;