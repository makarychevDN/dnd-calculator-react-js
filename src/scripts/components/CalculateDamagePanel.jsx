function CalculateDamagePanel(props) {    
return(
<>
  <div style={{minWidth: "230px", flexGrow: 1, height: "120px"}} className='generic-group-layout'>
    <label style={{fontSize: "larger"}}><b>Урон</b></label>
    <p></p>
    <div><label style={{color: "gray"}}>некротический 15 </label></div>
    <div><label style={{color: "gray"}}>излучением 21 </label></div>       
  </div>
</>
);
}

export default CalculateDamagePanel
