import './App.css'
import ThrowD20Panel from './scripts/components/throwD20Panel'
import CalculateDamagePanel from './scripts/components/CalculateDamagePanel'
import './styles/GenericGroupLayout.css'
import './styles/DiceButton.css'

function App() {

  return (
    <>
      <ThrowD20Panel 
        character={currentCharacter}
      />
      <CalculateDamagePanel />
    </>
  )
}

export default App
