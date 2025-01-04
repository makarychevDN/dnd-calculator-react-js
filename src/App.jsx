import './App.css'
import HitValuePanel from './scripts/components/HitValuePanel'
import CalculateDamagePanel from './scripts/components/CalculateDamagePanel'
import CharacterResourcesPanel from './scripts/components/CharacterResourcesPanel'
import './styles/GenericGroupLayout.css'
import './styles/DiceButton.css'
import './styles/Desk.css'
import { useState } from 'react'
import DeskPanel from './scripts/components/DeskPanel'

function App() {

  return (
    <>
      <header>      
      </header>

      <div className='page-center'>
        <div style={{paddingTop: "70px"}}>
          <DeskPanel character={currentCharacter}/>
        </div>
        {/*<div>
          <CharacterResourcesPanel currentCharacter={currentCharacter}/>
        </div>*/}
      </div>
    </>
  )
}

export default App
