import ResouceBar from "./ResouceBar"

function CharacterResourcesPanel(props) {
    
  return(
    <>
      <div>
        <div style={{marginTop: "-20px" }}></div>
        <ResouceBar />
        <div className="generic-group-layout">
          <div>деньги</div>
          <p></p>
          <div style={{color: "gray"}}>золото 10</div>
          <div style={{color: "gray"}}>серебро 10</div>
          <div style={{color: "gray"}}>медь 10</div>
        </div>
        <ResouceBar />
        <ResouceBar />
        <ResouceBar />
        <ResouceBar />
        <div style={{marginBottom: "-20px" }}></div>
      </div>
    </>
  );
}

export default CharacterResourcesPanel
