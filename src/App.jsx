import './App.css'
import ThrowD20Panel from './scripts/components/throwD20Panel'
import CalculateDamagePanel from './scripts/components/CalculateDamagePanel'
import CharacterResourcesPanel from './scripts/components/CharacterResourcesPanel'
import './styles/GenericGroupLayout.css'
import './styles/DiceButton.css'

function App() {

  return (
    <>
      <header>      
      </header>

      <div className='page-center'>
        <div>
          <ThrowD20Panel character={currentCharacter} />
        </div>
        <div>
          <CalculateDamagePanel />
        </div>
        <div>
          <CharacterResourcesPanel />
        </div>
      </div>
    </>
  )
}

export default App
