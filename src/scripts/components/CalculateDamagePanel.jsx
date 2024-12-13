import { useState } from "react";
import DiceButton from "./DiceButton"

function CalculateDamagePanel(props) {
    
    return(
        <>
            <div className='generic-transparent-group-layout'>
                <label style={{fontSize: "larger"}}><b>Урон</b></label>
                <p></p>
                <div><label style={{color: "gray"}}>некротический 15 </label></div>
                <div><label style={{color: "gray"}}>излучением 21 </label></div>
                <div><label style={{color: "gray"}}>рубящий 3 </label></div>           
            </div>
        </>
    );
}

export default CalculateDamagePanel
