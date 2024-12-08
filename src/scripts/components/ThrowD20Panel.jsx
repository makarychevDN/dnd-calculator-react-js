import { useState } from "react"
import DiceButton from "./DiceButton"

function ThrowD20Panel() {
  const [dices, setDices] = useState([]);
  const [diceValues, setDiceValues] = useState([]);
  const [selectedDiceValue, setSelectedDiceValue] = useState(0);
  const [sortingModeString, setSortingModeString] = useState("");
  let sortingMode = 0;

  return (
    <>
      <div className='generic-gruop-layout' style={{minWidth: "450px"}}>
        <div style={{display: "flex", minWidth: "max-content"}}>
          <div>
            <label style={{fontSize: "larger"}}><b>Попадание</b></label>
            <p></p>
            <div>
              <label style={{color: "gray"}}>модификатор </label>            
              <select id="selected-modificator">
                <option value="strength">силы 5</option>
                <option value="dexterity">ловкости 5</option>
                <option value="constitution">выносливости 5</option>
                <option value="intelligence">интеллекта 5</option>
                <option value="wisdom">мудрости 5</option>
                <option value="charisma">харизмы 5</option>
              </select>
            </div>
            <div><label style={{color: "gray"}}>бонус мастерства 3</label></div>
            <div id="d20-dices-parent" style={{color: "gray"}}>
              дайс {dices}
            </div>
          </div>
          <div style={{width: "fit-content", textAlign: "center", marginRight: "40px", marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}}>
            <div><label style={{fontSize: "xx-large"}}>{selectedDiceValue}</label></div>
            <div><label id="d20-mode-label" style={{color: "gray"}}>{sortingModeString}</label></div>
          </div>
        </div>
        <hr/>
        <button id="throw-d20-button" onClick={ () => throwD20(1, 0, "")}>d20</button>
        <button id="throw-d20-with-advantage-button" onClick={ () => throwD20(2, 1, "с преимуществом")}>d20 с преимуществом</button>
        <button id="throw-d20-with-disadvantage-button" onClick={ () => throwD20(2, -1, "с помехой")}>d20 с помехой</button>
      </div>
    </>
  )

  function throwD20(count, updatedSortingMode, sortingModeString){
    setDices([]);
    setDiceValues([]);
    setSortingModeString(sortingModeString);
    sortingMode = updatedSortingMode;

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
    diceValues[index] = value;
    console.log(diceValues);
    calculateThrowResult();
  }
  
  function calculateThrowResult(){
    setSelectedDiceValue(selectCorrectD20DiceResult(diceValues, sortingMode));
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
