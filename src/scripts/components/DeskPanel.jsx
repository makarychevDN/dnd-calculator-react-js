import ThrowD20Panel from './throwD20Panel'
import CalculateDamagePanel from './CalculateDamagePanel'
import { useState } from 'react';
import PackOfDices from './PackOfDices';

function DeskPanel(props) {
  const [testValue, settestValue] = useState([300, 200]);
  const [hitTargetPackOfDices, sethitTargetPackOfDices] = useState([
  <PackOfDices 
  key="sex" 
  labelText="попадание"
  diceCount={2}
  diceMaxValue={20}
  />,   <PackOfDices 
  key="sex2" 
  labelText="лунный луч"
  diceCount={5}
  diceMaxValue={10}
  />]);

  return(
    <>
      <div id="table panel" className='desk' style={{display: "flex"}}>
        <div id='left half of table' className='generic-group-layout' style={{width: "400px"}}>
          <div>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}}>
              d20
            </button>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}}>d20</button>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}}>d20</button>
          </div>
          <p></p>
          <div><button>ледянящее прикосновение</button></div>
          <p></p>
          <div><button>ледянящее прикосновение</button></div>
          <p></p>
          <div><button>ледянящее прикосновение</button></div>
        </div>

        <div id='right half of table' style={{width: "400px"}}>
          <div>
            <ThrowD20Panel character={currentCharacter} />
          </div>
          <div>
            <CalculateDamagePanel testValue={testValue}/>
          </div>
          <div className='generic-group-layout' style={{height: "200px"}}>
          <label style={{fontSize: "larger"}}><b>Стол</b></label>
          <p></p>
          <label>{hitTargetPackOfDices}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeskPanel
