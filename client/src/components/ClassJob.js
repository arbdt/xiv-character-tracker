// this component will display data for each of a characters class/jobs, specifically name and progress

// currently it does not incporporate old/existing datahowever

//imports
import React from "react";

// component definition
function ClassJob({classJob}){
    
    return (
        <div className="card">
            <div className="card-body">
                <h4>{classJob.classjobName}</h4>
                <p>Level: {classJob.classjobLevel} {0 !== undefined && 0 < classJob.classjobLevel ?
                <span className="trackedChange"> +{classJob.classjobLevel - 0}</span> : <></>}</p>
                <meter value={classJob.currentExp} max={classJob.maxExp}>
                    {classJob.currentExp} / {classJob.maxExp}
                </meter>
                <p>Experience: {classJob.currentExp} / {classJob.maxExp} {classJob.classjobLevel === classJob.classjobLevel && classJob.currentExp > 0 ?
                <span className="trackedChange"> +{classJob.currentExp - 0}</span> : <></>}</p>
            </div>
        </div>
    );
}

// export component
export default ClassJob;