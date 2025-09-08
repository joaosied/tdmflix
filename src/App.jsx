import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Player from './pages/Player'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
