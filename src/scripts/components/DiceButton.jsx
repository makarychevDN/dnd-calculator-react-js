import { useState } from "react";

function DiceButton(props){

    const [currentValue, setCurrentValue] = useState(0);

    return(
        <button onClick={ () => {(roll(props.maxValue))}}>{currentValue}</button>
    );

    function roll(maxValue){
        setCurrentValue(getRandomInteger(1, maxValue));
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (Number(max) + 1 - min));
}

export default DiceButton