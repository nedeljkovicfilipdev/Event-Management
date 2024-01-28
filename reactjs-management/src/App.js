import React, {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard/main';
import Login from './components/Login/main';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/loginpage" element={ <Login /> } />
      </Routes>
    </div>
  )
}

export default App;