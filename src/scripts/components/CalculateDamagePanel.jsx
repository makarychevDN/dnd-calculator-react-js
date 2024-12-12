import { useState } from "react";
import DiceButton from "./DiceButton"

function CalculateDamagePanel(props) {
    const [testValue, settestValue] = useState(props.testValue);
    
    return(
        <>
            <div className='generic-group-layout'>
                <label style={{fontSize: "larger"}}><b>Урон</b></label>
                <p></p>
                <div><label style={{color: "gray"}}>некротический 15 </label></div>
                <div><label style={{color: "gray"}}>излучением 21 </label></div>
                <div><label style={{color: "gray"}}>рубящий 3 </label></div>
                <label>{props.testValue}</label>         
            </div>
        </>
    );
}

export default CalculateDamagePanel