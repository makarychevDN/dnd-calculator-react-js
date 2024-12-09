import DiceButton from "./DiceButton"

function CalculateDamagePanel(props) {
    
    return(
        <>
            <div className='generic-group-layout'>
                <label style={{fontSize: "larger"}}><b>Урон</b></label>
                <p></p>
                    <div><label style={{color: "gray"}}>некротический 15 </label></div>
                    <div><label style={{color: "gray"}}>излучением 21 </label></div>
                    <div><label style={{color: "gray"}}>рубящий 3 </label></div>
                <hr></hr>
                <label style={{color: "gray"}}>ледянящее прикосновение </label>
                <div>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>

                </div>
                <label style={{color: "gray"}}>лунный луч </label>
                <div>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                    <button className={"d20-button"}>3</button>
                </div>
                <hr></hr>
                <div>
                    <button>ледянящее прикосновение</button>
                    <button>лунный луч</button>
                    <button>удар топором</button>
                    <button>иссушение</button>
                </div>
            </div>
        </>
    );
}

export default CalculateDamagePanel
