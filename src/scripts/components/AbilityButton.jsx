function AbilityButton({ability, onAbilityButtonClick}) {
  return(
  <>
    <div style={{width: "fit-content", border: "solid"}} 
      onClick={() => onAbilityButtonClick(
        ability.getCurrentAbilityOption())
      }
    >
      {ability.getName()}
      <button onClick={(e) => {e.stopPropagation(); alert("choose option")}}>
        v
      </button>
      <button onClick={(e) => {e.stopPropagation(); alert("edit")}}>
        \
      </button>
      <button onClick={(e) => {e.stopPropagation(); alert("delete")}}>
        x
      </button>
    </div>
  </>
  );
  }
  
  export default AbilityButton
  