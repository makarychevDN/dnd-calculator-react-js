import { useEffect, useState } from 'react';
import DiceButton from './DiceButton'

function PackOfDices(props){
  const [labelText,setLabelText] = useState(props.labelText);
  const [diceCount,setdiceCount] = useState(props.diceCount);
  const [diceMaxValue,setdiceMaxValue] = useState(props.diceMaxValue);
  const [diceButtons, setdiceButtons] = useState([]);

  useEffect(() => spawnDices(diceCount, diceMaxValue), []);
  //useEffect(() => alert(diceCount + " " + diceMaxValue));
  
  return(
    <>
      <div><label>{labelText} </label>{diceButtons}</div>
    </>
  );

  function spawnDices(diceCount, diceMaxValue){
    let newDiceButtons = [];
    for(let i = 0; i < diceCount; i++){
      newDiceButtons.push(<DiceButton 
        key={`${labelText} dice ${i}`} 
        maxValue={diceMaxValue}
        index={i} 
        setDiceValueToArrayFunc={setDiceValue}
      />)
    }  
    setdiceButtons(newDiceButtons);
  }

  function setDiceValue(index, value){

  }
}

export default PackOfDices
