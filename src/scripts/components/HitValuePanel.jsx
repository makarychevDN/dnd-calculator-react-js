import { useEffect, useState } from "react"

function HitValuePanel(props) {
  const [throwResultValue, setThrowResultValue] = useState(0);
  const [sortingModeString, setSortingModeString] = useState("");
  const [lastUsedCharacteristic, setLastUsedCharacteristic] = useState(props.character.getlastUsedCharacteristic())
  const [criticalHitLabelValue, setcriticalHitLabelValue] = useState("");

  useEffect(() => displayThrowResult(props.diceValue, 
    props.character.getProficiencyBonus(), 
    props.character.getLastUsedCharacteristicModificator()), 
  [props.diceValue, lastUsedCharacteristic, props.character.getProficiencyBonus()]);

  useEffect(() => updateAdvantageString(props.sortingMode), [props.sortingMode]);

  return (
    <>
      <div className='generic-group-layout' style={{minWidth: "250px"}}>
        <div style={{display: "flex", minWidth: "max-content"}}>
          <div>
            <label style={{fontSize: "larger"}}><b>Попадание</b></label>
            <p></p>
            <div>
              <label style={{color: "gray"}}>мод. </label>            
              <select value={lastUsedCharacteristic} onChange={e => updateLastUsedCharacteristic(e.target.value)}>
                <option value="strength">силы {props.character.getStrengthModificator()}</option>
                <option value="dexterity">ловкости {props.character.getDexterityModificator()}</option>
                <option value="constitution">выносливости {props.character.getConstitutionModificator()}</option>
                <option value="intelligence">интеллекта {props.character.getIntelligenceModificator()}</option>
                <option value="wisdom">мудрости {props.character.getWisdomModificator()}</option>
                <option value="charisma">харизмы {props.character.getCharismaModificator()}</option>
              </select>
            </div>
            <div><label style={{color: "gray"}}>бонус мастерства {props.character.getProficiencyBonus()}</label></div>
            <div id="d20-dices-parent" style={{color: "gray"}}>
              дайс {props.diceValue}
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
      </div>
    </>
  )

  function updateLastUsedCharacteristic(selectObject) {
    props.character.setLastUsedCharacteristic(selectObject);
    setLastUsedCharacteristic(selectObject);
  }

  function updateAdvantageString(sortingModeValue){
    switch(sortingModeValue){
      case -1: setSortingModeString("с помехой"); return;
      case 0: setSortingModeString(""); return;
      case 1: setSortingModeString("с преимуществом"); return;
    }
  }
  
  function displayThrowResult(diceValue, proficiencyBonus, lastUsedCharacteristicModificator){
    setcriticalHitLabelValue("");

    if(!diceValue){
      setThrowResultValue();
      return;
    }

    if(diceValue == 1){
      setThrowResultValue(1);
      return;
    }

    if(diceValue == 20){
      setcriticalHitLabelValue(" крит");
    }

    setThrowResultValue(
      diceValue
      + proficiencyBonus
      + lastUsedCharacteristicModificator
    );  
  }
}

export default HitValuePanel
