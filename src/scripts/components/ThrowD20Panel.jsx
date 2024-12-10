import { useEffect, useState } from "react"
import DiceButton from "./DiceButton"

function ThrowD20Panel(props) {
  const [dices, setDices] = useState([]);
  const [diceValues, setDiceValues] = useState([]);
  const [throwResultValue, setThrowResultValue] = useState(0);

  const [sortingModeString, setSortingModeString] = useState("");
  const [sortingMode, setSortingMode] = useState(0);

  const [character] = useState(props.character)
  const [lastUsedCharacteristic, setLastUsedCharacteristic] = useState(props.character.getlastUsedCharacteristic())

  const [criticalHitLabelValue, setcriticalHitLabelValue] = useState("");

  useEffect(() => {
    displayThrowResult();
  }, [sortingMode, diceValues, lastUsedCharacteristic]);

  return (
    <>
      <div className='generic-group-layout' style={{minWidth: "450px"}}>
        <div style={{display: "flex", minWidth: "max-content"}}>
          <div>
            <label style={{fontSize: "larger"}}><b>Попадание</b></label>
            <p></p>
            <div>
              <label style={{color: "gray"}}>модификатор </label>            
              <select value={lastUsedCharacteristic} onChange={e => updateLastUsedCharacteristic(e.target.value)}>
                <option value="strength">силы {character.getStrengthModificator()}</option>
                <option value="dexterity">ловкости {character.getDexterityModificator()}</option>
                <option value="constitution">выносливости {character.getConstitutionModificator()}</option>
                <option value="intelligence">интеллекта {character.getIntelligenceModificator()}</option>
                <option value="wisdom">мудрости {character.getWisdomModificator()}</option>
                <option value="charisma">харизмы {character.getCharismaModificator()}</option>
              </select>
            </div>
            <div><label style={{color: "gray"}}>бонус мастерства {character.getProficiencyBonus()}</label></div>
            <div id="d20-dices-parent" style={{color: "gray"}}>
              дайс {dices}
            </div>
          </div>
          <div style={{width: "fit-content", textAlign: "center", marginRight: "40px", marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}}>
            <div>
              <label style={{fontSize: "xx-large"}}>{throwResultValue}</label>
              <label style={{fontSize: "xx-large"}}>{criticalHitLabelValue}</label>
            </div>
            <div><label id="d20-mode-label" style={{color: "gray"}}>{sortingModeString}</label></div>
          </div>
        </div>
        <hr/>
        <button id="throw-d20-button" onClick={ () => throwD20(1, 0, "")} style={{marginRight: "10px"}}>d20</button>
        <button id="throw-d20-with-advantage-button" onClick={ () => throwD20(2, 1, "с преимуществом")} style={{marginRight: "10px"}}>d20 с преимуществом</button>
        <button id="throw-d20-with-disadvantage-button" onClick={ () => throwD20(2, -1, "с помехой")} style={{marginRight: "10px"}}>d20 с помехой</button>
      </div>
    </>
  )

  function updateLastUsedCharacteristic(selectObject) {
    props.character.setLastUsedCharacteristic(selectObject);
    setLastUsedCharacteristic(selectObject);
  }

  function throwD20(count, updatedSortingMode, sortingModeString){
    setDices([]);
    setDiceValues(Array(count).fill(0));
    setSortingModeString(sortingModeString);
    setSortingMode(updatedSortingMode);

    setTimeout(() => {
      let diceButtons = [];
      for(let i = 0; i < count; i++){
        diceButtons.push(<DiceButton 
          key={i} 
          maxValue="20" 
          index={i} 
          setDiceValueToArrayFunc={setDiceValue}
        />)
      }  
      setDices(diceButtons);
    }, 0);
  }

  function setDiceValue(index, value){
    setDiceValues(currentValues => {
      const newValues = [...currentValues];
      newValues[index] = value;
      return newValues;
    });
  }
  
  function displayThrowResult(){
    setcriticalHitLabelValue("");
    let selectedDiceResult = selectCorrectD20DiceResult(diceValues, sortingMode);

    if(!selectedDiceResult){
      setThrowResultValue();
      return;
    }

    if(selectedDiceResult == 1){
      setThrowResultValue(1);
      return;
    }

    if(selectedDiceResult == 20){
      setcriticalHitLabelValue(" крит");
    }

    setThrowResultValue(
      selectCorrectD20DiceResult(diceValues, sortingMode)
      + props.character.getProficiencyBonus()
      + props.character.getLastUsedCharacteristicModificator()
    );  
  }

  function selectCorrectD20DiceResult(diceValues, sortingMode){
    let arrayToSort = diceValues.slice(0);
    //sortingMode = convertSortingModToNumber(sortingMode);
    //sort the array in decreasing order if sortingMod is more than 0 
    //and in increasing order if less than 0
    arrayToSort = arrayToSort.sort((a, b) => (a - b) * -sortingMode);
    return arrayToSort[0];
  }
}

export default ThrowD20Panel
