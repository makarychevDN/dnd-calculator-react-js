  import { useEffect, useState } from 'react';
  import DiceButton from './DiceButton'

  function PackOfDices(props){
    const [labelText] = useState(props.labelText);
    const [diceCount] = useState(props.diceCount);
    const [diceMaxValue] = useState(props.diceMaxValue);
    const [diceButtons, setDiceButtons] = useState([]);
    const [diceValues, setDiceValues] = useState([]);
    const [onSumCalculated] = useState(props.onSumCalculated);

    useEffect(() => spawnDices(diceCount, diceMaxValue), []);
    useEffect(() => triggerCallbacks(), [diceValues]);
    
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
      setDiceButtons(newDiceButtons);
    }

    function setDiceValue(index, value){
      setDiceValues(currentValues => {
        const newValues = [...currentValues];
        newValues[index] = value;
        return newValues;
      });
    }

    function triggerCallbacks(){
      if(onSumCalculated != null){
        onSumCalculated(calculateSum(diceValues));
      }

      if(props.onDiceValueSelected){
        props.onDiceValueSelected(selectDiceValueBySorting(diceValues, 1));
      }
    }

    function calculateSum(diceValues){
      return diceValues.reduce(function(sum, current) {
        return sum + current;
      }, 0);
    }

    function selectDiceValueBySorting(diceValues, sortingMode){
      console.log(diceValues);
      let arrayToSort = diceValues.slice(0);
      //sortingMode = convertSortingModToNumber(sortingMode);
      //sort the array in decreasing order if sortingMod is more than 0 
      //and in increasing order if less than 0
      arrayToSort = arrayToSort.sort((a, b) => (a - b) * -sortingMode);
      return arrayToSort[0];
    }
  }

  export default PackOfDices
