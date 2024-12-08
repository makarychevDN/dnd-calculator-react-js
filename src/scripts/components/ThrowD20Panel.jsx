import { useState } from "react"
import DiceButton from "./DiceButton"

function ThrowD20Panel() {

  const [dices, setDices] = useState([]);
  const [diceValues, setDiceValues] = useState([]);

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
            <div><label style={{fontSize: "xx-large"}}>{1}</label></div>
            <div><label id="d20-mode-label" style={{color: "gray"}}></label></div>
          </div>
        </div>
        <hr/>
        <button id="throw-d20-button" onClick={ () => throwD20(1)}>d20</button>
        <button id="throw-d20-with-advantage-button" onClick={ () => throwD20(2)}>d20 с преимуществом</button>
        <button id="throw-d20-with-disadvantage-button" onClick={ () => throwD20(2)}>d20 с помехой</button>
      </div>
    </>
  )

  function throwD20(count){

    console.log("onCLick Called");

    setDices([]);

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
    //diceValues[index] = value; 
    //setDiceValues(diceValues);
    console.log(index + " " + value);
  }
}

export default ThrowD20Panel
