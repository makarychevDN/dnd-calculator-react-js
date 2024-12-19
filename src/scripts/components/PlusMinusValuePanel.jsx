function PlusMinusValuePanel(props) {
  return(
    <>
        <div id="group-1" style={{width: "fit-content", textAlign: "center", marginRight: "0px", marginLeft: "10px", marginTop: "auto", marginBottom: "auto"}}>
          <button className="generic-interactive-button">-</button>   
          <input type="text" style={{textAlign: "center"}} className="generic-text-input" />
          <button className="generic-interactive-button">+</button>
        </div>
    </>
  );
}

export default PlusMinusValuePanel