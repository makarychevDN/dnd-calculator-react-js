import { useState } from "react";

function PlusMinusValuePanel(props) {

  const [inputFieldValue, setInputFieldValue] = useState(1);

  return(
    <>
        <div style={{width: "fit-content", textAlign: "center", marginRight: "0px", marginLeft: "10px", marginTop: "auto", marginBottom: "auto"}}>
          <button className="generic-interactive-button" onClick={substract}>-</button>   
          <input type="text" style={{textAlign: "center"}} className="generic-text-input" value={inputFieldValue} onInput={removeUnexpectedSymbols} />
          <button className="generic-interactive-button" onClick={add}>+</button>
        </div>
    </>
  );

  function removeUnexpectedSymbols(e) {
    let correctedValue = e.target.value;

    correctedValue = Array.from(correctedValue)
      .filter(char => !isNaN(Number(char)))
      .join("");

    while(correctedValue[0] == "0"){
        correctedValue = correctedValue.slice(1);
    }

    if(!correctedValue){
        correctedValue = 0;
    }

    setInputFieldValue(correctedValue);
  }

  function add(){
    if(props.onAdd){
      props.onAdd(inputFieldValue);
    }

    setInputFieldValue(1);
  }

  function substract(){    
    if(props.onSubstract){
      props.onSubstract(inputFieldValue);
    }

    setInputFieldValue(1);
  }
}

export default PlusMinusValuePanel