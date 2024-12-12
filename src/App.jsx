import './App.css'
import ThrowD20Panel from './scripts/components/throwD20Panel'
import CalculateDamagePanel from './scripts/components/CalculateDamagePanel'
import CharacterResourcesPanel from './scripts/components/CharacterResourcesPanel'
import './styles/GenericGroupLayout.css'
import './styles/DiceButton.css'
import './styles/Desk.css'

function App() {

  return (
    <>
      <header>      
      </header>

      <div className='page-center' style={{display: "flex"}}>
        <div id="table panel" className='desk' style={{display: "flex"}}>
          <div id='left half of table' className='generic-group-layout' style={{width: "400px"}}>
            <div>
              <button style={{width: "80px", height: "80px", marginRight: "10px", marginBottom: "10px"}}>d20</button>
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
              <CalculateDamagePanel />
            </div>
            <div className='generic-group-layout' style={{height: "200px"}}>
            <label style={{fontSize: "larger"}}><b>Стол</b></label>
            <p></p>
            <label>попадание</label>
            </div>
          </div>
        </div>
        <div>
          <CharacterResourcesPanel />
        </div>
      </div>
    </>
  )
}

export default App
