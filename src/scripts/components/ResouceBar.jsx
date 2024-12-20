import { useState } from 'react';
import PlusMinusValuePanel from './PlusMinusValuePanel';

function ResouceBar(props) {
  const [maxValue, setMaxValue] = useState(props.resource.getMaxValue());
  const [currentValue, setCurrentValue] = useState(props.resource.getCurrentValue());
  const [resourceName, setResourceName] = useState(props.resource.getName());

  return(
    <>
      <div className="generic-group-layout">
        <label style={{fontSize: "medium"}}>{resourceName} {currentValue}</label>
        <div style={{display: "flex", minWidth: "max-content"}}>
          <div id="group-2" style={{flexGrow: 1}}>
            <input type="range" onInput={updateCurrentValue} max={maxValue} value={currentValue} className="health-slider" id="health-bar" />
          </div>
          <PlusMinusValuePanel />
        </div>
      </div>
    </>
  );

  function updateCurrentValue(e) {
    props.resource.setCurrentValue(e.target.value);
    setCurrentValue(e.target.value);
  }

  function addCurrentValue(){
    
  }
}

export default ResouceBar
