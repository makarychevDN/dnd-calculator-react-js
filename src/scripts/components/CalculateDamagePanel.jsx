import { useEffect, useState } from "react";

function CalculateDamagePanel(props) {
  const [damageInstances, setDamageInstances] = useState([]);
  const [damageSum, setDamageSum] = useState([]);

  useEffect(() => {
    let damageInstances = [
      ["рубящий", 5],
      ["излучение", 5],
      ["рубящий", 10],
    ]

    setDamageInstances(damageInstances);
  }, [])

  return(
    <>
      <div style={{minWidth: "230px", flexGrow: 1, height: "120px"}} className='generic-group-layout' onClick={() => calculateDamage(damageInstances)}>
        <label style={{fontSize: "larger"}}><b>Урон { damageSum }</b></label>
        <p></p>
        <div><label style={{color: "gray"}}>некротический 15 </label></div>
        <div><label style={{color: "gray"}}>излучением 21 </label></div>       
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
  }
}

export default CalculateDamagePanel
