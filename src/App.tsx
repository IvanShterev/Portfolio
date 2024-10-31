import { useState } from 'react'
import './App.css'
import Phone from './phone/phone'
import Description from './description/description'

function App() {

  return (
    <>
      <Phone />
      <div className="right-container">
        <Description />
        <div className="mascot-container">
          <img src="fire-mascot.png" alt="Fire Mascot" className="mascot" />
        </div>
      </div>

    </>
  )
}

export default App
