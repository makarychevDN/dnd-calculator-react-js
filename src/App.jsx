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

      <div className='page-center' style={{display: "flex", maxHeight: "804px"}}>
        <DeskPanel />
        <div>
          <CharacterResourcesPanel />
        </div>
      </div>
    </>
  )
}

export default App
