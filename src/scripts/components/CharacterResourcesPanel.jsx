function CharacterResourcesPanel(props) {
    
    return(
        <>
            <div className="generic-group-layout">
                <div>
                <label style={{fontSize: "medium"}}>Здоровье</label>
                    <div style={{display: "flex", minWidth: "max-content"}}>
                        <div id="group-2" style={{flexGrow: 1}}>
                            <input type="range" max="15" className="health-slider" id="health-bar" />
                        </div>
                        <div id="group-1" style={{width: "fit-content", textAlign: "center", marginRight: "0px", marginLeft: "10px", marginTop: "auto", marginBottom: "auto"}}>
                            <button id="decrease-health-button" className="generic-interactive-button">-</button>   
                            <input id="change-health-input-field" type="text" style={{textAlign: "center"}} className="generic-text-input" />
                            <button id="increase-health-button" className="generic-interactive-button">+</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <label style={{fontSize: "medium"}}>Здоровье</label>
                    <div style={{display: "flex", minWidth: "max-content"}}>
                        <div id="group-2" style={{flexGrow: 1}}>
                            <input type="range" max="15" className="health-slider" id="health-bar" />
                        </div>
                        <div id="group-1" style={{width: "fit-content", textAlign: "center", marginRight: "0px", marginLeft: "10px", marginTop: "auto", marginBottom: "auto"}}>
                            <button id="decrease-health-button" className="generic-interactive-button">-</button>   
                            <input id="change-health-input-field" type="text" style={{textAlign: "center"}} className="generic-text-input" />
                            <button id="increase-health-button" className="generic-interactive-button">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharacterResourcesPanel
