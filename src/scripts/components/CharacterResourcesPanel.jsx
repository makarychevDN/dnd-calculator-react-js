import ResouceBar from "./ResouceBar"

function CharacterResourcesPanel(props) {
    
    return(
        <>
            <div className="generic-group-layout">
                <ResouceBar />
                <hr></hr>
                <div>деньги</div>
                <p></p>
                <div style={{color: "gray"}}>золото 10</div>
                <div style={{color: "gray"}}>серебро 10</div>
                <div style={{color: "gray"}}>медь 10</div>
                <hr></hr>
                <ResouceBar />
                <hr></hr>
                <ResouceBar />
            </div>
        </>
    );
}

export default CharacterResourcesPanel
