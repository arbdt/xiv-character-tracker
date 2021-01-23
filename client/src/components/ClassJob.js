// this component will display data for each of a characters class/jobs, specifically name and progress

// old and new data is compared, and the difference is displayed alongside the current values

//imports
import React from "react";

// component definition
function ClassJob(props){
    let newJobData = props.newJobData;
    let oldJobData = props.oldJobData;
    
    return (
        <div className="card">
            <div className="card-body">
                <h4>{newJobData.classjobName}</h4>
                <p>Level: {newJobData.classjobLevel} {oldJobData.classjobLevel !== undefined && oldJobData.classjobLevel < newJobData.classjobLevel ?
                <span className="trackedChange"> +{newJobData.classjobLevel - oldJobData.classjobLevel}</span> : <></>}</p>
                <meter value={newJobData.currentExp} max={newJobData.maxExp}>
                    {newJobData.currentExp} / {newJobData.maxExp}
                </meter>
                <p>Experience: {newJobData.currentExp} / {newJobData.maxExp} {newJobData.classjobLevel === oldJobData.classjobLevel && newJobData.currentExp > oldJobData.currentExp ?
                <span className="trackedChange"> +{newJobData.currentExp - oldJobData.currentExp}</span> : <></>}</p>
            </div>
        </div>
    );
}

// export component
export default ClassJob;