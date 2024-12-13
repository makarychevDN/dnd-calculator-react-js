import HitValuePanel from './HitValuePanel'
import CalculateDamagePanel from './CalculateDamagePanel'
import { useState } from 'react';
import PackOfDices from './PackOfDices';

function DeskPanel(props) {
  const [hitTargetPackOfDices, setHitTargetPackOfDices] = useState();
  const [hitDiceValue, setHitDiceValue] = useState(0);
  const [sortingMode, setSortingMode] = useState(0);

  return(
    <>
      <div id="table panel" className='desk' style={{display: "flex"}}>
        <div id='left half of table' className='generic-group-layout' style={{width: "400px"}}>
          <div>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}} 
              onClick={() => throwD20PackOfDices(1, 0)}>
              d20
            </button>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}} 
              onClick={() => throwD20PackOfDices(2, 1)}>
              d20
            </button>
            <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}} 
              onClick={() => throwD20PackOfDices(2, -1)}>
              d20
            </button>
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
            <HitValuePanel character={currentCharacter} diceValue={hitDiceValue} sortingMode={sortingMode}/>
          </div>
          <div>
            <CalculateDamagePanel/>
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

  function throwD20PackOfDices(diceCount, sortingMode){
    setHitTargetPackOfDices();
    setSortingMode(sortingMode);

    setTimeout(() => {
      setHitTargetPackOfDices(<PackOfDices 
        key="sex" 
        labelText="попадание"
        diceCount={diceCount}
        diceMaxValue={20}
        onDiceValueSelected={displaySelectedValue}
        sortingMode={sortingMode}
      />);
    }, 0);
  }

  function displaySelectedValue(selectedValue){
    //alert(selectedValue);
    setHitDiceValue(selectedValue);
  }
}

export default DeskPanel
