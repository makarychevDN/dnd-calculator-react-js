import { useState } from "react";

function DiceButton(props){

    const [currentValue, setCurrentValue] = useState(getRandomInteger(1, props.maxValue));
    const [styleClasses, setStyleClasses] = useState("d20-button");

    return(
        <button className={styleClasses} onClick={ () => {(roll(props.maxValue))}}>{currentValue}</button>
    );

    function roll(maxValue){
        setCurrentValue(getRandomInteger(1, maxValue));
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (Number(max) + 1 - min));
}

export default DiceButton