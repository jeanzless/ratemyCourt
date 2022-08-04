import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Login from "./components/Login"
import Courts from "./components/Courts"
import Navbar from "./components/Navbar"
import Register from "./components/Register"




function App() {
  // ! Add your routes in here!
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </main>
    </Router>
  )
}

export default App
