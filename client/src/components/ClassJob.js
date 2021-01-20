// this component will display data for each of a characters class/jobs, specifically name and progress

//imports
import React from "react";

// component definition
function ClassJob({classJob}){
    
    return (
        <div className="card">
            <div className="card-body">
                <h4>{classJob.UnlockedState.Name}</h4>
                <p>Level: {classJob.Level} {0 !== undefined && 0 < classJob.Level ?
                <span className="trackedChange"> +{classJob.Level - 0}</span> : <></>}</p>
                <meter value={classJob.ExpLevel} max={classJob.ExpLevelMax}>
                    {classJob.ExpLevel} / {classJob.ExpLevelMax}
                </meter>
                <p>Experience: {classJob.ExpLevel} / {classJob.ExpLevelMax} {classJob.Level == classJob.Level && classJob.ExpLevel > 0 ?
                <span className="trackedChange"> +{classJob.ExpLevel - 0}</span> : <></>}</p>
            </div>
        </div>
    );
}

// export component
export default ClassJob;