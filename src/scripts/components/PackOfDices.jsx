  import { useEffect, useState } from 'react';
  import DiceButton from './DiceButton'

  function PackOfDices({labelText, diceCount, diceMaxValue, onSumCalculated, onDiceValueSelected, sortingMode}){
    const [diceButtons, setDiceButtons] = useState([]);
    const [diceValues, setDiceValues] = useState([]);

    useEffect(() => spawnDices(diceCount, diceMaxValue), []);
    useEffect(() => {
      if(onSumCalculated != null){
        onSumCalculated(calculateSum(diceValues));
      }

      if(onDiceValueSelected){
        onDiceValueSelected(selectDiceValueBySorting(diceValues, sortingMode));
      }
    }, [diceValues]);
    
    return(
      <>
        <div>
          <label>{labelText} </label>
          {diceButtons}
        </div>
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
      setDiceButtons(newDiceButtons);
    }

    function setDiceValue(index, value){
      setDiceValues(currentValues => {
        const newValues = [...currentValues];
        newValues[index] = value;
        return newValues;
      });
    }

    function calculateSum(diceValues){
      return diceValues.reduce(function(sum, current) {
        return sum + current;
      }, 0);
    }

    function selectDiceValueBySorting(diceValues, sortingMode){
      if (!diceValues || diceValues.length === 0) return null;
      //sortingMode = convertSortingModToNumber(sortingMode);
      //sort the array in decreasing order if sortingMod is more than 0 
      //and in increasing order if less than 0
      return [...diceValues].sort((a, b) => (a - b) * -sortingMode)[0];
    }
  }

  export default PackOfDices
