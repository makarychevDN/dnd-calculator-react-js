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
            <input type="range" onInput={handleSliderInput} max={maxValue} value={currentValue} className="mana-slider generic-resource-slider" id="health-bar" />
          </div>
          <PlusMinusValuePanel onAdd={(value) => addCurrentValue(value)} onSubstract={(value) => substractCurrentValue(value)}/>
        </div>
      </div>
    </>
  );

  function handleSliderInput(e) {
    props.resource.setCurrentValue(e.target.value);
    setCurrentValue(e.target.value);
  }

  function addCurrentValue(value){
    let updatedValue = Number(currentValue) + Number(value);
    if(updatedValue > maxValue){
      updatedValue = maxValue;
    }

    props.resource.setCurrentValue(updatedValue);
    setCurrentValue(updatedValue);
  }

  function substractCurrentValue(value){ addCurrentValue(-value) }
}

export default ResouceBar
