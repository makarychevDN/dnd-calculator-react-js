import { useEffect, useState } from "react";
import DamageValueAndTypeRow from "./DamageValueAndTypeRow";

function CalculateDamagePanel({damageInstances}) {
  const [damageSum, setDamageSum] = useState([]);
  const [damageValuesByTypes, setDamageValuesByTypes] = useState([]);
  const [damageValueAndTypeRows, setDamageValueAndTypeRows] = useState([]);

  useEffect(() => {
    calculateDamage(damageInstances);
  }, [damageInstances])

  useEffect(() => {
    let rows = [];
    let index = 0;

    damageValuesByTypes.forEach((value, key) => {
      rows.push(<DamageValueAndTypeRow valueAndDamageType = {[key, value]} key={`damage row ${index}`} />);
      index++;
    });

    setDamageValueAndTypeRows(rows);
  }, [damageValuesByTypes])

  return(
    <>
      <div style={{minWidth: "230px", flexGrow: 1, height: "120px"}} className='generic-group-layout' onClick={() => calculateDamage(damageInstances)}>
        <label style={{fontSize: "larger"}}><b>Урон { damageSum }</b></label>
        <p></p>
        {damageValueAndTypeRows}
      </div>
    </>
  );

  function calculateDamage(damageInstances){
    let damageOfDifferentTypes = new Map();
    let damageSum = 0;

    damageInstances.forEach(damageInstance => {
      damageSum += damageInstance[1];

      if(damageOfDifferentTypes.has(damageInstance[0])){
        damageOfDifferentTypes.set(
          damageInstance[0], 
          damageOfDifferentTypes.get(damageInstance[0]) + damageInstance[1]
        );
      }
      else{
        damageOfDifferentTypes.set(damageInstance[0], damageInstance[1]);
      }
    });

    setDamageSum(damageSum);
    setDamageValuesByTypes(damageOfDifferentTypes);
  }
}

export default CalculateDamagePanel
