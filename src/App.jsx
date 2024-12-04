import './App.css'
import './styles/GenericGroupLayout.css'

function App() {

  return (
    <>
      <div className='generic-gruop-layout'>
        <div style={{display: "flex", minWidth: "max-content"}}>
          <div>
          <label style={{fontSize: "larger"}}><b>Попадание</b></label>
          <p></p>
            <div>
              <label style={{color: "gray"}}>модификатор </label>            
              <select id="selected-modificator">
                <option value="strength">силы 5</option>
                <option value="dexterity">ловкости 5</option>
                <option value="constitution">выносливости 5</option>
                <option value="intelligence">интеллекта 5</option>
                <option value="wisdom">мудрости 5</option>
                <option value="charisma">харизмы 5</option>
              </select>
            </div>
            <div><label style={{color: "gray"}}>бонус мастерства 3</label></div>
            <div><label style={{color: "gray"}}>дайс</label></div>
          </div>
          <div style={{width: "fit-content", textAlign: "center", marginRight: "40px", marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}}>
            <div><label style={{fontSize: "xx-large"}}>13</label></div>
            <div><label style={{color: "gray"}}></label></div>
          </div>
        </div>
        <hr/>
        <button>d20</button>
        <button>d20 с преимуществом</button>
        <button>d20 с помехой</button>
      </div>
    </>
  )
}

export default App
