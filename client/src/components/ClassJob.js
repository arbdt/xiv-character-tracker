// this component will display data for each of a characters class/jobs, specifically name and progress

// component definition
function ClassJob(props){
    return (
        <div className="card">
            <div className="card-body">
                <h4>{props.classjobName}</h4>
                <p>Level: {props.classjobLevel} {props.oldJobLevel !== undefined && props.oldJobLevel < props.classjobLevel ?
                <p>&uarr; {props.classjobLevel - props.oldJobLevel}</p> : <></>}</p>
            </div>
        </div>
    );
}

// export component
export default ClassJob;