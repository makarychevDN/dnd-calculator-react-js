import { useEffect, useState } from "react";

function DiceButton(props){
  const [currentValue, setCurrentValue] = useState(0);
  const [styleClasses, setStyleClasses] = useState("d20-button");

  useEffect(() => {roll(props.maxValue)}, [])

  return(
    <button className={styleClasses} onClick={() => {(roll(props.maxValue));}}>
      {currentValue}
    </button>
  );

  function roll(maxValue){
    let result = getRandomInteger(1, maxValue);
    setCurrentValue(result);
    props.setDiceValueToArrayFunc(props.index, result);

    setStyleClasses("d20-button falling-dice");
    setTimeout(() => {
      setStyleClasses("d20-button");
    }, 150);
  }
}

function getRandomInteger(min, max){
  return Math.floor(min + Math.random() * (Number(max) + 1 - min));
}

export default DiceButton