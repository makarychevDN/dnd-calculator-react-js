import HitValuePanel from './HitValuePanel'
import CalculateDamagePanel from './CalculateDamagePanel'
import { useEffect, useState } from 'react';
import PackOfDices from './PackOfDices';
import AbilityButtons from './AbilityButtons';

function DeskPanel(props) {
  const [hitTargetPackOfDices, setHitTargetPackOfDices] = useState();
  const [hitDiceValue, setHitDiceValue] = useState(0);
  const [sortingMode, setSortingMode] = useState(0);

  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
    <>
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", width: "100%"}}>
        <div style={{display: "flex", flexDirection: isNarrow ? "column" : "row", width: "100%"}}>
          <div style={{flex: 1}}>
            <HitValuePanel character={props.character} diceValue={hitDiceValue} sortingMode={sortingMode}/> 
          </div>
          <div style={{flex: 1}}>
            <CalculateDamagePanel/>
          </div>
        </div>
        <div id='the second row' className='generic-group-layout' style={{height: "100px", marginBottom: "20px"}}>
            <label style={{fontSize: "larger"}}><b>Стол</b></label>
            <p></p>
            <label>{hitTargetPackOfDices}</label>
        </div>
        <div id="table panel" style={{display: "flex"}}>
          <div style={{width: "100%"}}>
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

            <AbilityButtons abilities={props.character.getAbilities()}/>
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
        key="hit target pack of dices" 
        labelText="попадание"
        diceCount={diceCount}
        diceMaxValue={20}
        onDiceValueSelected={(selectedValue) => setHitDiceValue(selectedValue)}
        sortingMode={sortingMode}
      />);
    }, 0);
  }
}

export default DeskPanel
