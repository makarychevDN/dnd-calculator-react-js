import { useEffect, useState } from "react";
import AbilityButton from "./AbilityButton";

function AbilityButtons({abilities}) {

  const [abilityButtons, setAbilityButtons] = useState([]);

  useEffect(() => spawnAbilityButtons(abilities), []);

  return(
    <>
      {abilityButtons}      
    </>
  );

  function spawnAbilityButtons(abilities){
    let newAbilityButtons = [];

    abilities.forEach(ability => {
      newAbilityButtons.push(<AbilityButton 
        key={`${ability.getName()} ability button`} 
        ability={ability}
      />)      
    });
    
    setAbilityButtons(newAbilityButtons);
  }
}
  
export default AbilityButtons
  