import ResouceBar from "./ResouceBar"

function CharacterResourcesPanel({currentCharacter}) {    
  return(
    <>
      <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <div style={{overflowY: "auto", marginTop: "20px", marginBottom: "20px"}}>        
          <div style={{marginTop: "-20px"}}></div>
          <ResouceBar key={124} resource={currentCharacter.getHealth()} style={{marginTop: "-20px"}}/>      

          <div className="generic-group-layout" style={{marginTop: "0px"}}>
            <div>деньги</div>
            <p></p>
            <div style={{color: "gray"}}>золото 10</div>
            <div style={{color: "gray"}}>серебро 10</div>
            <div style={{color: "gray"}}>медь 10</div>
          </div>

          <div id="resource points" style={{flexGrow: 1}}>
            {/*<ResouceBar />
            <ResouceBar />   
            <ResouceBar />   
            <ResouceBar />   
            <ResouceBar />   
            <ResouceBar />   */}
            <div style={{marginTop: "-20px"}}></div>
          </div>
          
          <div style={{marginBottom: "20px"}}></div>
        </div>
      </div>
    </>
  );
}

export default CharacterResourcesPanel
