import PlusMinusValuePanel from './PlusMinusValuePanel';

function ResouceBar() {
    
return(
  <>
    <div className="generic-group-layout">
      <label style={{fontSize: "medium"}}>здоровье 13</label>
      <div style={{display: "flex", minWidth: "max-content"}}>
        <div id="group-2" style={{flexGrow: 1}}>
          <input type="range" max="15" className="health-slider" id="health-bar" />
        </div>
        <PlusMinusValuePanel />
      </div>
    </div>
  </>
);
}

export default ResouceBar
