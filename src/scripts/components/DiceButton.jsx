import { useState } from "react";

function DiceButton(props){

    const [currentValue, setCurrentValue] = useState(getRandomInteger(1, props.maxValue));
    const [styleClasses, setStyleClasses] = useState("d20-button falling-dice");

    removeFallingAnimationOnDelay();

    return(
        <button className={styleClasses} onClick={ () => {(roll(props.maxValue))}}>{currentValue}</button>
    );

    function roll(maxValue){
        setCurrentValue(getRandomInteger(1, maxValue));

        addFallingAnimation();
        removeFallingAnimationOnDelay();
    }

    function addFallingAnimation(){
        setStyleClasses("d20-button falling-dice");
    }

    function removeFallingAnimationOnDelay(){
        setTimeout(() => {
            setStyleClasses("d20-button")
        }, 150);
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (Number(max) + 1 - min));
}

export default DiceButton