// this component will display data for each of a characters class/jobs, specifically name and progress

// old and new data is compared, and the difference is displayed alongside the current values

//imports
import React from "react";

// component definition
function ClassJob(props){
    let newJobData = props.newJobData;
    let oldJobData = props.oldJobData;
    
    return (
    <div className="col">
        <div className="card m-2 jobCard">
            <div className="card-body">
                <h4 className="card-title">{newJobData.classjobName}</h4>
                <p className="card-text">Level: {newJobData.classjobLevel} {oldJobData.classjobLevel !== undefined && oldJobData.classjobLevel < newJobData.classjobLevel ?
                <span className="trackedChange"> +{newJobData.classjobLevel - oldJobData.classjobLevel}</span> : <></>}</p>
                <meter value={newJobData.currentExp} max={newJobData.maxExp}>
                    {newJobData.currentExp} / {newJobData.maxExp}
                </meter>
                <p className="card-text">Experience: {newJobData.currentExp} / {newJobData.maxExp} {newJobData.classjobLevel === oldJobData.classjobLevel && newJobData.currentExp > oldJobData.currentExp ?
                <span className="trackedChange"> +{newJobData.currentExp - oldJobData.currentExp}</span> : <></>}</p>
            </div>
        </div>
    </div>
    );
}

// export component
export default ClassJob;